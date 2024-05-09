import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
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
  const [avanceDisabled, setAvanceDisabled] = useState(false);
  const [factureDisabled, setFactureDisabled] = useState(false);

  const handleAvanceChange = (value, record) => {
    setFactureDisabled(!!value);
  };

  const handleFactureChange = (value, record) => {
    setAvanceDisabled(!!value);
  };

  const handleAvanceBlur = () => {
    if (!avanceDisabled) {
      setFactureDisabled(false);
    }
  };

  const handleFactureBlur = () => {
    if (!factureDisabled) {
      setAvanceDisabled(false);
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
    let fournisseur = `${item.Nom}`;
    let MontantTotal = parseFloat(item.MontantTotal).toFixed(2);
    let MontantAvance = parseFloat(item.MontantAvance).toFixed(2);
    let name = `${id} | ${fournisseur} | ${MontantTotal} | ${MontantAvance}`;
    return { id, name };
  });

  const facture_choices = facture.map((item) => {
    let id = item.id;
    let name = `${item.NumeroFacture}`;
    return { name, id };
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
          <Grid item lg={6} md={12} sm={12} xs={12}>
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
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              className={classes.inputSize}
              source="IdAvance"
              label="Avance"
              choices={avance_choices}
              onChange={handleAvanceChange}
              onBlur={handleAvanceBlur}
              disabled={avanceDisabled}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="idFacture"
              label="Facture"
              className={classes.inputSize}
              choices={facture_choices}
              onChange={handleFactureChange}
              onBlur={handleFactureBlur}
              disabled={factureDisabled}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateFicheNavette;
