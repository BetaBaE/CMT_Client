import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  regex,
  required,
  useGetIdentity,
  useRecordContext,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
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
  Grid: {},
}));

const CreateFacture = () => {
  const classes = useStyles();
  const { identity, isLoading: identityLoading } = useGetIdentity();

  const valideBC = regex(/^CF\d{6}$/, "Veuillez entrer un Bc valide CF123456");

  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [avanceByFounisseur, setAvanceByFounisseur] = useState([]);
  const [avanceSumByFounisseur, setAvanceSumByFounisseur] = useState([]);
  const [idFounisseur, setIdFounisseur] = useState();

  useEffect(() => {
    getChantier().then((data) => {
      setChantier(data);
    });
    getFournisseur().then((data) => {
      setFournisseurs(data);
    });

    getDesignation().then((data) => {
      setDesignation(data);
    });
    // .catch((error) => {
    //   console.error("Error in fetching data:", error);
    // });
  }, []);

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
  const fournisseurs_choices = fournisseurs.map((item) => {
    let id = item.id;
    let name = `${item.Nom} | ${item.CodeFournisseur}`;
    return { id, name };
  });
  const chantier_choices = chantier.map((item) => {
    let id = item.id;
    let name = `${item.id} | ${item.LIBELLE}`;
    return { id, name };
  });

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

  const { isLoading, error } = useGetIdentity();
  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Redacteur"
              defaultValue={identity.fullName}
              disabled
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="NumeroFacture"
              className={classes.inputSize}
              validate={required("Veuillez entrer un Numero de Facture")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="BonCommande"
              validate={[valideBC, required("Veuillez entrer un Bc")]}
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
              className={classes.inputSize}
              validate={required("Veuillez entrer une DateEcheance")}
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
              className={classes.inputSize}
              validate={required("Veuillez entrer une Designation")}
              source="IdDesignation"
              label="Designation"
              choices={designation_choices}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              className={classes.inputSize}
              validate={required("Veuillez entrer un Chantier")}
              source="Chantier"
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
    </Create>
  );
};

export default CreateFacture;
