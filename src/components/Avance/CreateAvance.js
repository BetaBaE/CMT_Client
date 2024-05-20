import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  regex,
  required,
  useGetIdentity,
} from "react-admin";
import {
  getAvanceByBonCommande,
  getChantier,
  getFournisseur,
} from "../Global/getAssets.mjs";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
}));

const CreateAvance = () => {
  const classes = useStyles();
  const { identity } = useGetIdentity();

  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const [avanceByBonCommande, setAvanceByBonCommande] = useState([]);
  const [bcOnBlur, setBcOnBlur] = useState("");

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

  useEffect(() => {
    getAvanceByBonCommande(bcOnBlur)
      .then((data) => {
        setAvanceByBonCommande(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, [bcOnBlur]);

  const bcValue = avanceByBonCommande.map(({ BonCommande }) => {
    let bc = BonCommande;
    return bc;
  });

  const fournisseurs_choices = fournisseurs.map((item) => ({
    id: item.id,
    name: `${item.Nom} | ${item.CodeFournisseur}`,
  }));

  const chantier_choices = chantier.map((item) => ({
    id: item.id,
    name: `${item.id} | ${item.LIBELLE}`,
  }));

  const validBc = regex(
    /^(CF\d{6}|MC\d{7})$/,
    "Le bon de commande doit être au format CF123456 ou MC1234567"
  );

  const validateBc = (value) => {
    if (bcValue.toString() === value) {
      return "Ce bon de commande a déjà été consommé";
    }
    return undefined;
  };
  const { isLoading, error } = useGetIdentity();
  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;

  return (
    <Create>
      <SimpleForm>
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
            <TextInput
              source="BonCommande"
              className={classes.inputSize}
              validate={[
                required("Veuillez entrer un bon de commande"),
                validateBc,
                validBc,
              ]}
              onChange={(e) => {
                setBcOnBlur(e.target.value);
              }}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantAvance"
              className={classes.inputSize}
              min={0}
              validate={required("Entrez un montant d'avance")}
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
              validate={required("Veuillez entrer une référence de document")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateDocumentReference"
              className={classes.inputSize}
              validate={required(
                "Veuillez entrer une date de référence du document"
              )}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              source="IdFournisseur"
              label="Fournisseur"
              validate={required("Veuillez entrer un fournisseur")}
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
              validate={required("Veuillez entrer une date d'avance ")}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              className={classes.inputSize}
              source="Chantier"
              validate={required("Veuillez entrer un chantier")}
              choices={chantier_choices}
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
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateAvance;
