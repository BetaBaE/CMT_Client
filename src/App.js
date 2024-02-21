import { EditGuesser, ListGuesser } from "react-admin";
import {
  Admin,
  Resource,
  restProvider,
  ListAvance,
  ListFactures,
  ListFournisseur,
  ListRibAtner,
  ListRibFournisseur,
  ListRibTempo,
  ListUsers,
  CreateFacture,
  CreateAvance,
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
  EditFournisseur,
  CreateFournisseur,
  CreateRibAtner,
  EditRibAtner,
  CreateRibTempo,
  EditRibFournisseur,
  MainMenu,
  EditAvance,
  auth,
  MyLogin,
  CreateUser,
  EditUser,
  CreateFicheNavette,
  EditFicheNavette,
  ListFicheNavette,
} from "./components/Global/exports";

function App() {
  return (
    <Admin
      loginPage={MyLogin}
      dataProvider={restProvider("http://10.111.1.232:8080")}
      authProvider={auth}
      menu={MainMenu}
    >
      <Resource
        name="users"
        list={ListUsers}
        edit={EditUser}
        create={CreateUser}
        icon={FaFileInvoiceDollar}
      />
      <Resource
        name="Avance"
        list={ListAvance}
        edit={EditAvance}
        create={CreateAvance}
        icon={FaFileInvoiceDollar}
      />
      <Resource
        name="factures"
        // options={{ label: "Factures" }}
        list={ListFactures}
        create={CreateFacture}
        icon={FaFileInvoice}
      />
      <Resource
        name="ficheNavette"
        list={ListFicheNavette}
        create={CreateFicheNavette}
        edit={EditGuesser}
        icon={FaFileInvoice}
      />
      <Resource
        name="fournisseurs"
        options={{ label: "Fournisseurs" }}
        list={ListFournisseur}
        create={CreateFournisseur}
        edit={EditFournisseur}
        icon={FaUserTie}
      />
      <Resource
        name="ribatner"
        list={ListRibAtner}
        create={CreateRibAtner}
        edit={EditRibAtner}
        icon={FaCreditCard}
      />
      <Resource
        name="ribtempo"
        list={ListRibTempo}
        create={CreateRibTempo}
        icon={FaCreditCard}
      />
      <Resource
        name="ribfournisseurs"
        list={ListRibFournisseur}
        edit={EditRibFournisseur}
        icon={FaCreditCard}
      />
    </Admin>
  );
}

export default App;
