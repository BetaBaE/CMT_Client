import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  regex,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useDataProvider,
} from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "90%",
  },
  chip: {
    fontWeight: "bold",
  },
}));

export const CreateRibTempo = (props) => {
  const dataProvider = useDataProvider();
  const [fournisseurs, setFournisseurs] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("fournisseurs", {
        pagination: { page: 1, perPage: 3000 },
        sort: { field: "nom", order: "ASC" },
      })
      .then(({ data }) => {
        setFournisseurs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataProvider]);

  let fournisseur_choices = fournisseurs.map(({ id, nom }) => ({
    id: id,
    name: nom,
  }));
  const validateRib = regex(
    /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/,
    "Le RIB doit être de la forme 111 222 333 444 555 666 777 888"
  );

  // console.log(project_choices);
  // TODO: [0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm {...props}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AutocompleteInput
              label="Fournisseur"
              validate={required("Le fournisseur est obligatoire")}
              className={classes.autocomplete}
              source="FournisseurId"
              choices={fournisseur_choices}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              validate={[validateRib, required("Le RIB est obligatoire")]}
              className={classes.autocomplete}
              source="rib"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput className={classes.autocomplete} source="swift" />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              source="banque"
              label="banque"
              choices={[
                { id: "ABB", name: "Al Barid Bank" },
                { id: "AWB", name: "Attijari wafa banque" },
                { id: "CDM", name: "Credit du Maroc" },
                { id: "CAM", name: "Crédit agricole du Maroc" },
                { id: "CIH", name: "CIH" },
                {
                  id: "BMCI",
                  name: "Banque marocaine pour le commerce et l'industrie",
                },
                { id: "BMCE", name: "BMCE" },
                { id: "BCP", name: "Banque centrale populaire" },
                { id: "Arab Bank", name: "Arab Bank Maroc" },
                { id: "BAA", name: "Bank Al Amal" },
                { id: "CitiBank", name: "Citibank Morocco" },
                { id: "CFG", name: "CFG Bank" },
                { id: "Société générale Maroc", name: "SGMB" },
                { id: "Banco Sabadell", name: "Banco Sabadell Maroc" },
                { id: "La Caixa", name: "Caixabank" },
              ]}
            ></SelectInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};
