import { Datagrid, List, TextField } from "react-admin";
import { FilterRIBAtner } from "./FilterRIBAtner";

export const ListRibAtner = (props) => (
  <List filters={<FilterRIBAtner />} title="RIB Atner">
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <TextField source="nom" />
      <TextField source="rib" />
    </Datagrid>
  </List>
);
