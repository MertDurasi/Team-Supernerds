import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Neuigkeiten from "./features/Neuigkeiten";
import Urlaubsantrag from "./features/Urlaubsantrag";
import Downloads from "./features/Downloads";
import Einstellungen from "./features/Einstellungen";
import Kontaktformular from "./features/Kontaktformular";
import Lohnabrechnung from "./features/Lohnabrechnung";
import Dienstplan from "./features/Dienstplan";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={menuOpen ? "container-open" : "container-closed"}>
      <Router>
        <Navigation
          menuOpen={menuOpen}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />

        <Sidebar
          menuOpen={menuOpen}
          closeMenu={closeMenu}
          openMenu={openMenu}
        />

        <Route path="/dashboard/neuigkeiten">
          <Neuigkeiten />
        </Route>
        <Route path="/dashboard/dienstplan">
          <Dienstplan />
        </Route>
        <Route path="/dashboard/urlaubsantrag">
          <Urlaubsantrag />
        </Route>
        <Route path="/dashboard/lohnabrechnung">
          <Lohnabrechnung />
        </Route>
        <Route path="/dashboard/downloads">
          <Downloads />
        </Route>
        <Route path="/dashboard/kontaktformular">
          <Kontaktformular />
        </Route>
        <Route path="/dashboard/einstellungen">
          <Einstellungen />
        </Route>
      </Router>
    </div>
  );
};

export default Dashboard;
