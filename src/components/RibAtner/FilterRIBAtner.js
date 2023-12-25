import { Filter, TextInput } from "react-admin";

export const FilterRIBAtner = (props) => (
  <Filter {...props}>
    {/* <TextInput source="id" /> */}
    <TextInput source="nom" />
    <TextInput source="rib" />
  </Filter>
);
