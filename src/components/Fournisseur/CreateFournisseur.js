import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import {
  Create,
  DateInput,
  regex,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "90%",
  },
  chip: {
    fontWeight: "bold",
  },
}));

const CreateFournisseur = (props) => {
  //   const [echeanceType, setEcheanceType] = useState(null);

  //   const handleEcheanceChange = (event) => {
  //     setEcheanceType(event.target.value);
  //   };
  const classes = useStyles();
  const validationcodefournisseur = regex(
    /^[0-9]+$/,
    "ce code n'est pas valide"
  );
  return (
    <Create>
      <SimpleForm {...props}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              validate={[
                required("Le Code fournisseur est obligatoire"),
                validationcodefournisseur,
              ]}
              className={classes.autocomplete}
              source="CodeFournisseur"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              validate={required("Le fournisseur est obligatoire")}
              className={classes.autocomplete}
              source="nom"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="IF"
              label="Identifiant Fiscal"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="ICE"
              label="ICE"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="addresse"
              label="Adresse"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="mail"
              label="Mail"
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};
export default CreateFournisseur;
