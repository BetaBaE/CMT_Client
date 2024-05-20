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
import { getChantier, getFournisseur } from "../Global/getAssets.mjs";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chantierData = await getChantier();
        setChantier(chantierData);
        const fournisseurData = await getFournisseur();
        setFournisseurs(fournisseurData);
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
  const FactureEditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton id="save" />
    </Toolbar>
  );

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
              choices={fournisseurs_choices}
              className={classes.inputSize}
            />
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
            <TextInput
              source="ReferenceAvanace"
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
            <AutocompleteInput
              source="IdDesignation"
              validate={required("Veuillez entrer une Designation")}
              className={classes.inputSize}
              choices={[
                { id: "D1", name: "Designation 1 " },
                { id: "D2", name: "Designation 1" },
              ]}
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
                { id: "NON", name: "NON" },
              ]}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditFacture;
