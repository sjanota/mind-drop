import React from 'react';
import './Navbar.css';
import BootstrapNavbar from "react-bootstrap/Navbar";

function Navbar() {
  return <BootstrapNavbar bg={"dark"} variant={"dark"}>
    <BootstrapNavbar.Brand>Mind Drop</BootstrapNavbar.Brand>
  </BootstrapNavbar>
}

export default Navbar;
