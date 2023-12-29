import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SimpleForm,
  TextInput,
  regex,
  required,
  useGetIdentity,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { getChantier, getFournisseur } from "../Global/getAssets.mjs";

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

  useEffect(() => {
    getChantier().then((data) => {
      setChantier(data);
    });
    getFournisseur()
      .then((data) => {
        setFournisseurs(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, []);

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
              className={classes.inputSize}
              choices={fournisseurs_choices}
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
              className={classes.inputSize}
              validate={required("Veuillez entrer une DateEcheance")}
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
          </Grid>{" "}
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
              choices={[
                { id: "D1", name: "Designation 1 " },
                { id: "D2", name: "Designation 1" },
              ]}
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
            <DateInput source="DateTransfer" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="Acompte"
              className={classes.inputSize}
              min={0}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateFacture;
