import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useGetIdentity,
} from "react-admin";
import {
  getAvance,
  getChantier,
  getFacture,
  getFournisseur,
} from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));
const CreateFicheNavette = () => {
  const classes = useStyles();
  const { identity, isLoading: identityLoading } = useGetIdentity();
  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const [avance, setAvance] = useState([]);
  const [facture, setFacture] = useState([]);
  const [factureDisabled, setFactureDisabled] = useState("");
  const [avanceDisabled, setAvanceDisabled] = useState("");

  const handleDisableFacture = (e) => {
    if (e.target.value !== "") {
      setFactureDisabled(e.target.value);
    } else {
      setFactureDisabled("");
    }
  };

  const handleDisableAvance = (e) => {
    if (e.target.value !== "") {
      setAvanceDisabled(e.target.value);
    } else {
      setAvanceDisabled("");
    }
  };

  useEffect(() => {
    getChantier()
      .then((data) => {
        setChantier(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
    getAvance()
      .then((data) => {
        setAvance(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
    getFacture()
      .then((data) => {
        setFacture(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
    getFournisseur()
      .then((data) => {
        setFournisseurs(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, []);
  const avance_choices = avance.map((item) => {
    let id = item.id;
    // let name = `${item.id}`;
    return id;
  });
  const facture_choices = facture.map((item) => {
    let id = item.id;
    // let name = `${item.id}`;
    return id;
  });
  console.log(avance_choices);
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
          {/* <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Redacteur"
              defaultValue={identity.fullName}
              disabled
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="NumeroFN"
              label="Numero FN"
              min={0}
              validate={required("Veuillez entrer un numero fiche navette")}
              className={classes.inputSize}
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
            <AutocompleteInput
              className={classes.inputSize}
              validate={required("Veuillez entrer un fournisseur")}
              source="fournisseur"
              choices={fournisseurs_choices}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateFN"
              label="Date FN"
              className={classes.inputSize}
            />
          </Grid> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              className={classes.inputSize}
              source="IdAvance"
              label="Avance"
              onChange={handleDisableFacture}
              disabled={avanceDisabled != ""}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="idFacture"
              label="Facture"
              className={classes.inputSize}
              onChange={handleDisableAvance}
              disabled={factureDisabled != ""}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateFicheNavette;
