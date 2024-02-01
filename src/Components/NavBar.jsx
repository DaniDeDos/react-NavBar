import React, { useState } from "react";
import "../Style.css";
import list_ico from '../assets/icons/list.svg';
const NavBar = () => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo nav-link">
          Logo
        </a>
        <button
          className="toggle nav-toggle"
          aria-label={navMenuVisible ? "Cerrar Menu" : "Abrir Menu"}
          onClick={toggleNavMenu}
        >
          <img src={list_ico} alt="Menu" />
        </button>
        <ul className={`nav-menu ${navMenuVisible ? "nav-menu-visible" : ""}`}>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">
              test 1
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">
              test 2
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">
              test 3
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">
              test 4
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
