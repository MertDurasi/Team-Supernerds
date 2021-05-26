import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Neuigkeiten from "./Neuigkeiten";

const Dashboard = () => {
  
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
        console.log("test");
    }
    const closeMenu = () => {
        setMenuOpen(false);
        console.log("test");
    }

    return (
      <div className="container">
          <Navigation menuOpen={menuOpen} openMenu={openMenu} />
          <Neuigkeiten />
          <Sidebar menuOpen={menuOpen} closeMenu={closeMenu}/>
      </div>
    );
}

export default Dashboard;
