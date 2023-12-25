import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  useNotify,
} from "react-admin";
import { getChantier, getFournisseur } from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
const EditAvance = (props) => {
  const classes = useStyles();
  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const notify = useNotify();

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
        "Montant Avance should not be greater than Montant Total",
        "warning"
      );
      return {
        MontantAvance:
          "Montant Avance should not be greater than Montant Total",
      };
    }

    return {};
  };
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />} validate={validateMontantAvance}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="id" className={classes.inputSize} disabled />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="BonCommande" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantAvance"
              // validate={MontantAvance}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput source="MontantTotal" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="DocumentReference"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="DateDocumentReference"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdFournisseur"
              choices={fournisseurs_choices}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Redacteur"
              className={classes.inputSize}
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput source="DateAvance" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              min={1}
              defaultValue={1}
              source="NombreDeParties"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput source="CreatedDate" className={classes.inputSize} />
          </Grid>
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="DeletedAt" className={classes.inputSize} />
          </Grid> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="Chantier"
              choices={chantier_choices}
              className={classes.inputSize}
            />
          </Grid>
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="CumulRegle" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="CumulValide" className={classes.inputSize} />
          </Grid> */}
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="Annulation"
              className={classes.inputSize}
              emptyValue={0}
              choices={[
                { id: "oui", name: "oui" },
                { id: "non", name: "non" },
              ]}
            />
          </Grid> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="Restituer"
              className={classes.inputSize}
              emptyValue={0}
              choices={[
                { id: "oui", name: "oui" },
                { id: "non", name: "non" },
              ]}
            />
          </Grid>
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="Etat"
              className={classes.inputSize}
              emptyValue={0}
              choices={[
                { id: "Affecter", name: "Affecter" },
                { id: "Non", name: "Non" },
              ]}
            />
          </Grid> */}
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditAvance;
