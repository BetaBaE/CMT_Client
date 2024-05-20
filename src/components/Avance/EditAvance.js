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
  required,
  useGetIdentity,
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
  const { identity, isLoading, error } = useGetIdentity();
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
  const validateMontantAvance = (value, allValues) => {
    const montantAvance = allValues.MontantTotal;
    if (value > montantAvance) {
      notify(
        "Le montant d'avance ne peut pas être supérieur au montant total ",
        "warning"
      );
      return "Le montant d'avance ne peut pas être supérieur au montant total";
    }
    return undefined;
  };
  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              defaultValue={identity.fullName}
              source="Redacteur"
              className={classes.inputSize}
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="id" className={classes.inputSize} disabled />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="BonCommande"
              validate={required("Entrer un BonCommande")}
              disabled
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantAvance"
              validate={[
                required("Entrer un Monatant d'avance"),
                validateMontantAvance,
              ]}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTotal"
              validate={required("Entrer un BonCommande")}
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
            <TextInput
              source="DocumentReference"
              className={classes.inputSize}
              validate={[required("Entrer un document reference")]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateDocumentReference"
              className={classes.inputSize}
              validate={[required("Entrer une date document reference")]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdFournisseur"
              label="Fournisseur"
              validate={required("Entrer un Fournisseur")}
              choices={fournisseurs_choices}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateAvance"
              validate={[required("Entrer une date d'avance")]}
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              min={1}
              defaultValue={1}
              source="NombreDeParties"
              validate={[required("Entrer un nombre de parties")]}
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
              validate={required("Entrer un Chantier")}
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
              validate={required("verification middelt")}
              emptyText="No category selected"
              choices={[
                { id: "Oui", name: "Oui" },
                { id: "Non", name: "Non" },
              ]}
            />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="VerifiyMidelt"
              className={classes.inputSize}
              validate={required("verification middelt")}
              emptyText="No category selected"
              choices={[
                { id: "Oui", name: "Oui" },
                { id: "Non", name: "Non" },
              ]}
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
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="Annulation"
              className={classes.inputSize}
              defaultValue="Non"
              choices={[
                { id: "Oui", name: "Oui" },
                { id: "Non", name: "Non" },
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
