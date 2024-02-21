import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import ListFactures from "../Factures/ListFactures";
import CreateFacture from "../Factures/CreateFacture";
import ListAvance from "../Avance/ListAvance";
import CreateAvance from "../Avance/CreateAvance";
import {
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
} from "react-icons/fa6";
import { ListFournisseur } from "../Fournisseur/ListFournisseur";
import { EditFournisseur } from "../Fournisseur/EditFournisseur";
import CreateFournisseur from "../Fournisseur/CreateFournisseur";
import { ListRibAtner } from "../RibAtner/ListRibAtner";
import { CreateRibAtner } from "../RibAtner/CreateRibAtner";
import { EditRibAtner } from "../RibAtner/EditRibAtner";
import { ListRibTempo } from "../RibTemporaire/ListRibTempo";
import { CreateRibTempo } from "../RibTemporaire/CreateRibTempo";
import { ListRibFournisseur } from "../RibFournisseur/ListRibFournisseur";
import { EditRibFournisseur } from "../RibFournisseur/EditRibFournisseur";
import { MainMenu } from "../../MainMenu";
import EditAvance from "../Avance/EditAvance";
import { auth } from "../../authProvider";
import MyLogin from "../../LoginPage/login";
import CreateUser from "../users/CreateUser";
import ListUsers from "../users/ListUsers";
import EditUser from "../users/EditUser";
import CreateFicheNavette from "../FichNavette/CreateFicheNavette";
import EditFicheNavette from "../FichNavette/EditFicheNavette";
import ListFicheNavette from "../FichNavette/ListFicheNavette";

export {
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
  ListFicheNavette,
  CreateFicheNavette,
  EditFicheNavette,
};
