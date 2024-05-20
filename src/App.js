import { EditGuesser, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
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
import CreateSynthesePrePaiement from "./components/synthesePrePaiment/CreateSynthesePrePaiement";
import ListSynthesePrePaiment from "./components/synthesePrePaiment/ListSynthesePrePaiment";
import EditSynthesePrePaiment from "./components/synthesePrePaiment/EditSynthesePrePaiment";
import EditFacture from "./components/Factures/EditFacture";

function App() {
  return (
    <Admin
      loginPage={MyLogin}
      // dataProvider={restProvider("ENT")}
      dataProvider={simpleRestProvider("http://10.111.1.77:8080")}
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
        edit={EditFacture}
        create={CreateFacture}
        icon={FaFileInvoice}
      />
      <Resource
        name="ficheNavette"
        list={ListFicheNavette}
        create={CreateFicheNavette}
        edit={EditFicheNavette}
        icon={FaFileInvoice}
      />
      <Resource
        name="syntheseperpaiement"
        // options={{ label: "Fournisseurs" }}
        list={ListSynthesePrePaiment}
        create={CreateSynthesePrePaiement}
        edit={EditSynthesePrePaiment}
        // icon={FaUserTie}
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
