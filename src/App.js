import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import ListFactures from "./components/Factures/ListFactures";
import CreateFacture from "./components/Factures/CreateFacture";
import ListAvance from "./components/Avance/ListAvance";
import CreateAvance from "./components/Avance/CreateAvance";
import {
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
} from "react-icons/fa6";
import { ListFournisseur } from "./components/Fournisseur/ListFournisseur";
import { EditFournisseur } from "./components/Fournisseur/EditFournisseur";
import CreateFournisseur from "./components/Fournisseur/CreateFournisseur";
import { ListRibAtner } from "./components/RibAtner/ListRibAtner";
import { CreateRibAtner } from "./components/RibAtner/CreateRibAtner";
import { EditRibAtner } from "./components/RibAtner/EditRibAtner";
import { ListRibTempo } from "./components/RibTemporaire/ListRibTempo";
import { CreateRibTempo } from "./components/RibTemporaire/CreateRibTempo";
import { ListRibFournisseur } from "./components/RibFournisseur/ListRibFournisseur";
import { EditRibFournisseur } from "./components/RibFournisseur/EditRibFournisseur";
import { MainMenu } from "./MainMenu";
import EditAvance from "./components/Avance/EditAvance";
import { auth } from "./authProvider";
import MyLogin from "./LoginPage/login";

function App() {
  return (
    <Admin
      loginPage={MyLogin}
      dataProvider={restProvider("http://10.111.1.232:8080")}
      // layout={MainMenu}
      authProvider={auth}
      menu={MainMenu}
    >
      <Resource
        name="Avance"
        // options={{ label: "Avance" }}
        list={ListAvance}
        // list={ListGuesser}
        edit={EditAvance}
        create={CreateAvance}
        icon={FaFileInvoiceDollar}
      />
      <Resource
        name="factures"
        options={{ label: "Factures" }}
        list={ListFactures}
        create={CreateFacture}
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
