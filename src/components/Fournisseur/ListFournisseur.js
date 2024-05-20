import { Datagrid, DateField, List, TextField } from "react-admin";
import FilterFournisseurs from "./FilterFournisseurs";

export const ListFournisseur = () => {
  return (
    <List filters={<FilterFournisseurs />}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="CodeFournisseur" />
        <TextField source="Nom" />
        <TextField source="Ice" label="ICE" />
        <TextField source="IdentifiantFiscal" label="identifiant fiscal" />
        <TextField source="Mail" />
        <TextField source="Adresse" label="adresse" />
        <TextField source="categorie" />
        {/* <TextField source="echeancereel" />
        <TextField source="echeanceloi" label="echeanceloi" /> */}
      </Datagrid>
    </List>
  );
};
