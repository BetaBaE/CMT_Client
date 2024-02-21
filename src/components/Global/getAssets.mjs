// let data = [];
let apiURL = "http://10.111.1.232:8080/";

export const getChantier = async () => {
  try {
    const response = await fetch(`${apiURL}chantier`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const getFournisseur = async () => {
  try {
    const response = await fetch(`${apiURL}Allfournisseurs`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getAvanceByBonCommande = async (bc) => {
  try {
    const response = await fetch(`${apiURL}AvanceByBonCommande/${bc}`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const getAvance = async () => {
  try {
    const response = await fetch(`${apiURL}Avance`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getFacture = async () => {
  try {
    const response = await fetch(`${apiURL}factures`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
