import { Grid, makeStyles } from "@material-ui/core";
import {
  Edit,
  required,
  SaveButton,
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

export const EditRibAtner = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
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
    </Edit>
  );
};
