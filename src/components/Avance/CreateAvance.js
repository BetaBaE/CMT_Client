import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  regex,
  required,
  useGetIdentity,
  useNotify,
} from "react-admin";
import {
  getAvanceByBonCommande,
  getChantier,
  getFournisseur,
} from "../Global/getAssets.mjs";

// const MyToolbar = () => (
// <Toolbar>
//   <SaveButton
//     type="button"
//     // mutationOptions={on}
//     // onClick={(e) => {
//     //   e.preventDefault();
//     //   // e.stopPropagation();
//     // }}
//   />
// </Toolbar>
// );

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "90%",
  },
  Grid: {},
}));

const CreateAvance = () => {
  const classes = useStyles();
  const notify = useNotify();
  const [fournisseurs, setFournisseurs] = useState([]);
  const [chantier, setChantier] = useState([]);
  const [avanceByBonCommande, setAvanceByBonCommande] = useState([]);
  const [bcOnBlur, setBcOnBlur] = useState("");
  const { identity, isLoading: identityLoading } = useGetIdentity();

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

  //Regex for Bc to support only CF and 6 Numbers or Mc 7

  const validBc = regex(
    /^(CF\d{6}|MC\d{7})$/,
    "Le bon de commande doit être au format CF123456 ou MC1234567"
  );
  //validation for bc to not be replicated
  const validateBc = (value) => {
    if (bcValue.toString() === value) {
      notify("Ce bon de commande a déjà été consommé", "warning");
      return "Ce bon de commande a déjà été consommé";
    }
    return undefined;
  };

  //valideation for Montant total should not be inferieur  MontantAvance
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
              validate={[
                required("Entrez un montant d'avance"),
                validateMontantAvance,
              ]}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <NumberInput
              source="MontantTotal"
              className={classes.inputSize}
              validate={[
                required("Veuillez entrer un MontantTotal"),
                // validateMontantTotal,
              ]}
              min={0}
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
        </Grid>
      </SimpleForm>
    </Create>
  );
};
export default CreateAvance;
