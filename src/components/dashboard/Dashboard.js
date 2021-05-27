import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Neuigkeiten from "./Neuigkeiten";

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
      <Neuigkeiten />
      <Navigation
        menuOpen={menuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} openMenu={openMenu} />
    </div>
  );
};

export default Dashboard;
