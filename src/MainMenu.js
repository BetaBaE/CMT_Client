import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import SubMenu from "./SubMenu";
import {
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
} from "react-icons/fa6";

export const MainMenu = () => (
  <Menu>
    {/* <Menu.DashboardItem /> */}
    <SubMenu primaryText="Section Facture" leftIcon={<BookIcon />}>
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
    </SubMenu>

    <SubMenu primaryText="Section Fournisseur" leftIcon={<BookIcon />}>
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
