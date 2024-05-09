import React from "react";
import {
  DateInput,
  Edit,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
import { Grid, makeStyles } from "@material-ui/core";
const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));
const EditFicheNavette = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="id" className={classes.inputSize} disabled />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="NumeroFN"
              className={classes.inputSize}
              label="Numero FN"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Chantier" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTTC"
              className={classes.inputSize}
              label="Montant TTC"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="IdFournisseur"
              className={classes.inputSize}
              label="Fournisseur"
            />
          </Grid>
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Redacteur" className={classes.inputSize} />
          </Grid> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="DateFN"
              className={classes.inputSize}
              label="Date FN"
            />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="idFacture" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="IdAvance" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Nom" className={classes.inputSize} />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditFicheNavette;
