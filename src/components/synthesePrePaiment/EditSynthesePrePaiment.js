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
const EditSynthesePrePaiment = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="id" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput source="RibAtner" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput source="CreatedDate" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="ModeReglement" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Etat" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput source="Total" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="DateExecution" className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="DirecteurSigne" className={classes.inputSize} />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditSynthesePrePaiment;
