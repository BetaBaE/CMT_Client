import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
  useNotify,
} from "react-admin";
import { getChantier, getFournisseur } from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));

const CreateAvance = () => {
  const classes = useStyles();
  const notify = useNotify();
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
  const validateMontantAvance = (values) => {
    const montantAvance = values.MontantAvance || 0;
    const montantTotal = values.MontantTotal || 0;

    if (montantAvance > montantTotal) {
      notify(
        "Le Montant Avance ne doit pas être supérieur au Montant Total",
        "warning"
      );
      return {
        MontantAvance:
          "Le Montant Avance ne doit pas être supérieur au Montant Total",
      };
    }

    return {};
  };
  return (
    <Create>
      <SimpleForm validate={validateMontantAvance}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Redacteur" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="BonCommande"
              className={classes.inputSize}
              validate={required("Veuillez entrer un Bc")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantAvance"
              className={classes.inputSize}
              min={0}
              validate={required("entrez un Montant d'avance")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTotal"
              className={classes.inputSize}
              validate={required("Veuillez entrer un MontantTotal")}
              min={0}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="DocumentReference"
              className={classes.inputSize}
              validate={required("Veuillez entrer un DocumentReference")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateDocumentReference"
              className={classes.inputSize}
              validate={required("Veuillez entrer un DateDocumentReference ")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdFournisseur"
              label="Fournisseur"
              validate={required("Veuillez entrer un Fournisseur")}
              choices={fournisseurs_choices}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              className={classes.inputSize}
              source="NombreDeParties"
              min={1}
              defaultValue={1}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateAvance"
              className={classes.inputSize}
              validate={required("Veuillez entrer un DateAvance ")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              className={classes.inputSize}
              source="Chantier"
              validate={required("Veuillez entrer un Chantier")}
              choices={chantier_choices}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};
export default CreateAvance;
