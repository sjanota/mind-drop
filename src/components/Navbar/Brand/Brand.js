import React from 'react';
import './Brand.css';
import Octicon, {Repo} from "@primer/octicons-react";
import Navbar from "react-bootstrap/Navbar";

function Brand() {
  return <Navbar.Brand className={"Brand"}><Octicon icon={Repo} size={"medium"}/>Mind Drop</Navbar.Brand>
}

export default Brand;
