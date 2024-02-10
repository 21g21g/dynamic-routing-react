import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/navbar" className="navbar-brand">
          Navbar
        </Link>
        <div className="navbar-nav me-auto">
          <Link to="/allQuote" className="nav-link">
            All Qoute
          </Link>
          <Link to="/addqoute" className="nav-link">
            Add Qoute
          </Link>
          <Link to="/book" className="nav-link">
            book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
