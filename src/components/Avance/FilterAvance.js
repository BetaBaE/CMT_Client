import React, { useEffect, useState } from "react";
import { AutocompleteInput, Filter, SelectInput, TextInput } from "react-admin";
import { getChantier } from "../Global/getAssets.mjs";

const FilterAvance = (props) => {
  const [chantier, setChantier] = useState([]);
  useEffect(() => {
    getChantier()
      .then((data) => {
        setChantier(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, []);
  const chantier_choices = chantier.map((item) => {
    let id = item.id;
    let name = `${item.id} | ${item.LIBELLE}`;
    return { id, name };
  });
  return (
    <Filter {...props}>
      <SelectInput
        source="Etat"
        emptyValue={0}
        choices={[
          { id: "affectee", name: "affectee" },
          { id: "multiple", name: "multiple" },
          { id: "initie", name: "initie" },
        ]}
      />
      <TextInput source="BonCommande" />
      <AutocompleteInput source="Chantier" choices={chantier_choices} />
    </Filter>
  );
};

export default FilterAvance;
