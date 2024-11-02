import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleNavbar}>
        {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" activeClassName="active-link" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          About
        </NavLink>
        <NavLink to="/education" activeClassName="active-link" className="nav-link">
          Education
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active-link" className="nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
