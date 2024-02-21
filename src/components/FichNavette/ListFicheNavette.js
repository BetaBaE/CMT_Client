import React from "react";
import { Datagrid, DateField, List, TextField } from "react-admin";

const ListFicheNavette = (props) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <TextField source="NumeroFN" />
        <TextField source="Chantier" />
        <TextField source="MontantTTC" />
        <TextField source="IdFournisseur" />
        <TextField source="Redacteur" />
        <TextField source="DateFN" />
        <TextField source="idFacture" />
        <TextField source="IdAvance" />
      </Datagrid>
    </List>
  );
};

export default ListFicheNavette;
