import React from "react";

import MainNav from "./MainNav";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand " />
          
          <MainNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
