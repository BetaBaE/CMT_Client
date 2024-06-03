import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  NumberInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  useGetIdentity,
} from "react-admin";
import {
  avancesumbyfournisseur,
  getAvanceByFournisseur,
  getChantier,
  getDesignation,
  getFournisseur,
} from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
}));

const EditFacture = () => {
  const classes = useStyles();
  const { identity } = useGetIdentity();

  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [idFounisseur, setIdFounisseur] = useState();
  const [avanceByFounisseur, setAvanceByFounisseur] = useState([]);
  const [avanceSumByFounisseur, setAvanceSumByFounisseur] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chantierData = await getChantier();
        setChantier(chantierData);
        const fournisseurData = await getFournisseur();
        setFournisseurs(fournisseurData);
        getDesignation().then((data) => {
          setDesignation(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const fournisseurs_choices = fournisseurs.map((item) => ({
    id: item.id,
    name: `${item.Nom} | ${item.CodeFournisseur}`,
  }));

  const chantier_choices = chantier.map((item) => ({
    id: item.id,
    name: `${item.id} | ${item.LIBELLE}`,
  }));
  const designation_choices = designation.map((item) => {
    let id = item.id;
    let name = `${item.Designation} | ${Math.round(
      (item.PourcentageTVA - 1) * 100
    )}%`;
    return { id, name };
  });
  const referenceAvance_choices = avanceByFounisseur.map((item) => {
    let id = item.id;
    // Format the MontantTotal as a currency with two decimal places
    let montantTotal = parseFloat(item.MontantTotal).toFixed(2);

    // Format the DateAvance as a date string
    let dateAvance = new Date(item.DateAvance).toLocaleDateString("fr-FR");

    let name = `${item.BonCommande} | ${dateAvance} | ${montantTotal}`;
    return { id, name };
  });
  const FactureEditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton id="save" />
    </Toolbar>
  );

  function handleOnchangeFournisseur(id) {
    if (id != "") {
      getAvanceByFournisseur(id).then((data) => {
        setAvanceByFounisseur(data);
      });
      avancesumbyfournisseur(id).then((data) => {
        setAvanceSumByFounisseur(data);
      });
    }
  }
  return (
    <Edit>
      <SimpleForm toolbar={<FactureEditToolbar />}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Redacteur"
              defaultValue={identity ? identity.fullName : ""}
              disabled
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="NumeroFacture"
              validate={required("Veuillez entrer un Numero de Facture")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="BonCommande"
              validate={required("Veuillez entrer un Bc")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdFournisseur"
              label="Fournisseur"
              id="IdFournisseur"
              className={classes.inputSize}
              choices={fournisseurs_choices}
              onChange={(e) => {
                handleOnchangeFournisseur(e);
                setIdFounisseur(e);
              }}
            />
            {avanceSumByFounisseur.length > 0 && idFounisseur !== "" ? (
              <span>
                {`Le fournisseur `}
                <b>{avanceSumByFounisseur[0].nom}</b>
                {` a un montant de `}
                <b>{Number(avanceSumByFounisseur[0].MontantTTC).toFixed(2)}</b>
                {`  TTC pour les avances.`}
              </span>
            ) : (
              ""
            )}
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateFacture"
              validate={required("Veuillez entrer une DateFacture")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateEcheance"
              validate={required("Veuillez entrer une DateEcheance")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              choices={referenceAvance_choices}
              source="ReferenceAvance"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantHT"
              label="Montant HT"
              min={0}
              validate={required("Veuillez entrer un MontantHT")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTVA"
              label="Montant TVA"
              min={0}
              validate={required("Veuillez entrer un MontantTVA")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTTC"
              label="Montant TTC"
              min={0}
              validate={required("Veuillez entrer un MontantTTC")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdDesignation"
              validate={required("Veuillez entrer une Designation")}
              className={classes.inputSize}
              label="Designation"
              choices={designation_choices}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="Chantier"
              validate={required("Veuillez entrer un Chantier")}
              className={classes.inputSize}
              choices={chantier_choices}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="NetAPayer"
              min={0}
              validate={required("Veuillez entrer un NetAPayer")}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Etat"
              defaultValue="En cours"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="Annulation"
              className={classes.inputSize}
              defaultValue="Non"
              choices={[
                { id: "Oui", name: "Oui" },
                { id: "Non", name: "Non" },
              ]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="VerifiyMidelt"
              className={classes.inputSize}
              defaultValue="Non"
              choices={[
                { id: "Oui", name: "Oui" },
                { id: "Non", name: "Non" },
              ]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              className={classes.inputSize}
              validate={required("Veuillez entrer une categorie")}
              source="categorie"
              choices={[
                {
                  id: "fourniture de travaux ",
                  name: "fourniture de travaux  ",
                },
                { id: "service", name: "service" },
              ]}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditFacture;
