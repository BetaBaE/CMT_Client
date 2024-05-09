import React from "react";
import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

const ListSynthesePrePaiment = () => {
  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        <TextField source="id" />
        <NumberField source="RibAtner" />
        <DateField source="CreatedDate" />
        <TextField source="ModeReglement" />
        <TextField source="Etat" />
        <NumberField source="Total" />
        <TextField source="DateExecution" />
        <TextField source="DirecteurSigne" />
      </Datagrid>
    </List>
  );
};

export default ListSynthesePrePaiment;
