import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/education" activeClassName="active-link">
        Education
      </NavLink>
      <NavLink to="/portfolio" activeClassName="active-link">
        Portfolio
      </NavLink>
      <NavLink to="/contact" activeClassName="active-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
