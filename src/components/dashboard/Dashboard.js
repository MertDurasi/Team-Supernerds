import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Neuigkeiten from "./Neuigkeiten";

const Update = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container">
      <Navigation
        menuOpen={menuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Neuigkeiten />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} openMenu={openMenu} />
    </div>
  );
};

export default Update;
