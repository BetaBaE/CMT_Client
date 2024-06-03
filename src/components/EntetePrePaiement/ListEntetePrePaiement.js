import React from "react";
import {
  CreateButton,
  DatagridConfigurable,
  DateField,
  ExportButton,
  List,
  ReferenceField,
  SelectColumnsButton,
  TextField,
  TopToolbar,
} from "react-admin";

const EntetePrePaiementListActions = () => (
  <TopToolbar>
    {/* Uncomment and define FactureFilters if you have filters */}
    {/* <FilterButton filters={FactureFilters} /> */}
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const ListEntetePrePaiement = (props) => {
  return (
    <List {...props} actions={<EntetePrePaiementListActions />}>
      <DatagridConfigurable bulkActionButtons={false} rowClick="edit">
        <TextField source="id" />
        <TextField source="IdSynthesePaiement" />
        <TextField source="ModeReglement" />
        <TextField source="ribAtner" />
        <TextField source="IdDocReglement" />
        <DateField source="DateDocReglement" />
        <DateField source="DateEcheanceDocReglement" />
        <TextField source="ribFournisseur" />
        <TextField source="RibFournisseur" />
        <TextField source="MontantPaiement" />
        <DateField source="DateCreation" />
        <TextField source="Redacteur" />
        <TextField source="Etat" />
      </DatagridConfigurable>
    </List>
  );
};

export default ListEntetePrePaiement;
