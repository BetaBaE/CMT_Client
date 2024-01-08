import React from "react";
import {
  Create,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreateUser = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="fullname" />
        <TextInput source="username" />
        <PasswordInput source="password" />
        {/* <TextInput source="role" /> */}
        <SelectInput
          source="role"
          allowEmpty
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
        {/* <DateInput source="created" /> */}
      </SimpleForm>
    </Create>
  );
};

export default CreateUser;
