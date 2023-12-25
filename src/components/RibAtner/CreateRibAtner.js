import { Grid, makeStyles } from "@material-ui/core";
import { Create, required, SimpleForm, TextInput } from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "90%",
  },
  chip: {
    fontWeight: "bold",
  },
}));

export const CreateRibAtner = () => {
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={1}>
          {/* <TextInput source="id" /> */}
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              validate={required("Le nom est obligatoire")}
              className={classes.autocomplete}
              source="nom"
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              validate={required("Le RIB est obligatoire")}
              className={classes.autocomplete}
              source="rib"
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};
