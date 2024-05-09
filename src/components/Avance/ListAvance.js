import React from "react";
import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";
import FilterAvance from "./FilterAvance";

const ListAvance = (props) => {
  return (
    <List filters={<FilterAvance />}>
      <Datagrid bulkActionButtons={false} rowClick="edit" {...props}>
        <TextField source="id" />
        <TextField source="BonCommande" />
        <NumberField source="MontantAvance" />
        <NumberField source="MontantTotal" />
        <TextField source="DocumentReference" />
        <DateField source="DateDocumentReference" />
        <TextField source="Nom" label="Fournisseur" />
        <TextField source="Redacteur" />
        <DateField source="DateAvance" />
        <TextField source="NombreDeParties" />
        <DateField source="CreatedDate" />
        <TextField source="Chantier" />
        <TextField source="CumulRegle" />
        <TextField source="CumulValide" />
        <TextField source="Annulation" />
        <TextField source="Restituer" />
        <TextField source="Etat" />
        <TextField source="VerifiyMidelt" />
        <TextField source="LIBELLE" label="Libelle" />
      </Datagrid>
    </List>
  );
};

export default ListAvance;
