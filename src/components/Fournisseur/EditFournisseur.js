import {
  DateInput,
  Edit,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  useGetIdentity,
} from "react-admin";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "90%",
  },
  chip: {
    fontWeight: "bold",
  },
}));
export const EditFournisseur = () => {
  const classes = useStyles();

  const { isLoading, error } = useGetIdentity();
  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;

  const UserEditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton id="save" />
    </Toolbar>
  );
  return (
    <Edit label="modfier" undoable={false}>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              className={classes.autocomplete}
              source="IF"
              label="Identifiant fiscal"
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
    </Edit>
  );
};
