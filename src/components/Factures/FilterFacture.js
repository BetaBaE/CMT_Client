import React from "react";
import { Filter, TextInput } from "react-admin";

const FilterFacture = (props) => {
  return (
    <Filter {...props}>
      <TextInput source="NumeroFacture"  />
      <TextInput source="BonCommande"  />
    </Filter>
  );
};

export default FilterFacture;
