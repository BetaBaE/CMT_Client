import * as React from "react";
import { Menu } from "react-admin";
import SubMenu from "./SubMenu";
import {
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
} from "react-icons/fa6";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TbReportMoney } from "react-icons/tb";

export const MainMenu = () => (
  <Menu>
    {/* <Menu.DashboardItem /> */}
    <Menu.Item to="users" primaryText="Users" leftIcon={<FaUserTie />} />
    <SubMenu primaryText="Section Facture" leftIcon={<ChevronRightIcon />}>
      <Menu.Item
        to="Avance"
        primaryText="Avance"
        leftIcon={<FaFileInvoiceDollar />}
      />
      <Menu.Item
        to="factures"
        primaryText="Factures"
        leftIcon={<FaFileInvoice />}
      />
      <Menu.Item
        to="FicheNavette"
        primaryText="Fiche navette"
        leftIcon={<TbReportMoney />}
      />
    </SubMenu>
    <Menu.Item
      to="syntheseperpaiement"
      primaryText="syntheseperpaiement"
      leftIcon={<FaUserTie />}
    />
    <Menu.Item
      to="enteteprepaiement"
      primaryText="enteteprepaiement"
      leftIcon={<FaUserTie />}
    />
    <SubMenu primaryText="Section Fournisseur" leftIcon={<ChevronRightIcon />}>
      <Menu.Item
        to="fournisseurs"
        primaryText="Fournisseurs"
        leftIcon={<FaUserTie />}
      />
      <Menu.Item
        to="ribtempo"
        primaryText="Rib Temporaire"
        leftIcon={<FaCreditCard />}
      />
      <Menu.Item
        to="ribfournisseurs"
        primaryText="Rib Fournisseurs"
        leftIcon={<FaCreditCard />}
      />
    </SubMenu>
    <Menu.Item
      to="ribatner"
      primaryText="Rib Atner"
      leftIcon={<FaCreditCard />}
    />
  </Menu>
);
