import { Grid, makeStyles } from "@material-ui/core";
import {
  Edit,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "90%",
  },
  chip: {
    fontWeight: "bold",
  },
}));

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);

export const EditRibFournisseur = () => {
  const classes = useStyles();
  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={1}>
          {/* <TextInput source="id" /> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="fournisseur"
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="swift"
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="banque"
              label="Banque"
              disabled
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput className={classes.autocomplete} source="rib" disabled />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SelectInput
              className={classes.autocomplete}
              source="validation"
              validate={required()}
              choices={[
                { id: "Validé", name: "Validé" },
                { id: "Non Valider", name: "Non Valider" },
                { id: "Ignorer", name: "Ignorer" },
              ]}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};
