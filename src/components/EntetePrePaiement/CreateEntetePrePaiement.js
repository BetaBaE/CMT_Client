import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));
const CreateEntetePrePaiement = () => {
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Redacteur"
              className={classes.inputSize}
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <ReferenceInput
              className={classes.inputSize}
              source="IdSynthesePaiement"
              reference="syntheseperpaiement"
            />
          </Grid>
          {/* <TextInput source="IdSynthesePaiement" /> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="ModeReglement"
              className={classes.inputSize}
              choices={[
                { id: "Carte", name: "Carte" },
                { id: "Effet", name: "Effet" },
                { id: "Espece", name: "Espece" },
                { id: "Cheque", name: "Cheque" },
                { id: "OrderVirment", name: "OrderVirment" },
              ]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="RibAtner" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="IdDocReglement" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateDocReglement"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateEcheanceDocReglement"
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="IdFournisseur" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="RibFournisseur" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="MontantPaiement" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput source="DateCreation" className={classes.inputSize} />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateEntetePrePaiement;
