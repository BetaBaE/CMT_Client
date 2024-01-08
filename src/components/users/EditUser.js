import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  DateInput,
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
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

const EditUser = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput
          source="fullname"
          validate={required("Le nom est obligatoire")}
          className={classes.autocomplete}
        />
        <TextInput
          source="username"
          validate={required("Username est obligatoire")}
          className={classes.autocomplete}
        />
        {/* <TextInput source="Role" /> */}
        <SelectInput
          validate={required("Le Role est obligatoire")}
          className={classes.autocomplete}
          source="Role"
          choices={[
            { id: "admin", name: "Admin" },
            { id: "normal user", name: "Normal user" },
            {
              id: "superviseur comptabilite",
              name: "Superviseur Comptabilité",
            },
            { id: "comptable", name: "Comptable" },

            { id: "comptable midelt", name: "comptable midelt" },
            {
              id: "superviseur comptabilite midelt",
              name: "superviseur comptabilite midelt",
            },
            //   { id: "photography", name: "Photography" },
          ]}
        />
        {/* <TextInput source="password" /> */}
        <SelectInput
          validate={required("Le status est obligatoire")}
          className={classes.autocomplete}
          source="isActivated"
          choices={[
            { id: "true", name: "activer" },
            { id: "false", name: "desactiver" },
            //   { id: "photography", name: "Photography" },
          ]}
        />
        <DateInput source="created" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
