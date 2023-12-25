import React from "react";
import {
  CreateButton,
  DatagridConfigurable,
  DateField,
  ExportButton,
  Filter,
  FilterButton,
  InfiniteList,
  List,
  ReferenceField,
  SelectColumnsButton,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

import FilterFacture from "./FilterFacture";

const FactureFilters = [      
<TextInput source="NumeroFacture"  />
,<TextInput source="BonCommande"  />
]

const FactureListActions = () => (
  <TopToolbar>
    <FilterButton  
    filters={FactureFilters}

    />
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const ListFactures = (props) => {
  return (
    <List {...props} actions={<FactureListActions />} 
    filters={<FilterFacture/>}
    >
      <DatagridConfigurable bulkActionButtons={false}>
        <TextField source="id" />
        <TextField source="NumeroFacture" />
        <TextField source="BonCommande" />
        {/* <TextField source="IdFournisseur" /> */}
        {/* <ReferenceField source="Nom" reference="fournisseurs" /> */}
        <ReferenceField source="IdFournisseur" reference="allfournisseurs">
          <TextField source="Nom" />
        </ReferenceField>
        <DateField source="DateFacture" />
        <DateField source="DateEcheance" />
        <TextField source="ReferenceAvanace" />
        <TextField source="MontantHT" label="Montant HT" />
        <TextField source="MontantTVA" label="Montant TVA" />
        <TextField source="MontantTTC" label="Montant TTC" />
        <TextField source="Redacteur" />
        <TextField source="VerifiyMidelt" />
        <TextField source="UpdatedBy" />
        <TextField source="IdDesignation" label="Designation" />
        <DateField source="CreatedDate" />
        <TextField source="DeletedAt" />
        <TextField source="Chantier" />
        <TextField source="NetAPayer" />
        <TextField source="Transfert" />
        <DateField source="DateTransfer " />
        <TextField source="CumulRegle  " />
        <TextField source="CumulValide  " />
        <TextField source="Acompte" />
        <TextField source="Etat" />
      </DatagridConfigurable>
    </List>
  );
};

export default ListFactures;
