import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  AutocompleteInput,
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { getRibAtner } from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));

const CreateSynthesePrePaiement = () => {
  const [ribAtner, setRibAtner] = useState([]);
  useEffect(() => {
    getRibAtner().then((data) => {
      setRibAtner(data);
    });
  }, []);
  const ribAtner_choices = ribAtner.map((item) => {
    let id = item.Id;
    let name = `${item.Rib} | ${item.Nom}`;
    return { id, name };
  });
  const ModeReglement_choices = [
    { id: "OrderVirment", name: "OrderVirment" },
    { id: "Cheque", name: "Cheque" },
    { id: "Espece", name: "Espece" },
    { id: "Effet", name: "Effet" },
    { id: "Carte", name: "Carte" },
  ];
  const directeur_choices = [
    { id: "younes zamani", name: "Younes Zamani" },
    { id: "mohamed zamani", name: "Mohamed Zamani" },
  ];
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="RibAtner"
              label="Rib Atner"
              choices={ribAtner_choices}
              className={classes.inputSize}
              validate={[required("Veuillez entrer un RibAtner")]}
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
              source="ModeReglement"
              choices={ModeReglement_choices}
              className={classes.inputSize}
              validate={[required("Veuillez entrer un Mode de reglement")]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="Total"
              className={classes.inputSize}
              validate={[required("Veuillez entrer un total")]}
              min={0}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="DirecteurSigne"
              choices={directeur_choices}
              className={classes.inputSize}
              validate={[required("Veuillez entrer un directeur")]}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateSynthesePrePaiement;
