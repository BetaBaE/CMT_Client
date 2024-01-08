import React from "react";
import { Datagrid, DateField, List, TextField } from "react-admin";

const ListUsers = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        <TextField source="fullname" />
        <TextField source="username" />
        <TextField source="Role" />
        <TextField source="isActivated" />
        <DateField source="created" />
      </Datagrid>
    </List>
  );
};

export default ListUsers;
