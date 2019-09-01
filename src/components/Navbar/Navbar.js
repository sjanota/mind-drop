import React from 'react';
import './Navbar.css';
import BootstrapNavbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Navbar({labelFilter, setLabelFilter}) {
  return <BootstrapNavbar bg={"dark"} variant={"dark"}>
    <BootstrapNavbar.Brand>Mind Drop</BootstrapNavbar.Brand>
      <Form inline>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Label</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as={"select"} onChange={e => setLabelFilter(e.target.value)} value={labelFilter}>
            <option value={""}>All</option>
            <option>Dla mnie</option>
            <option>Dla kogoś</option>
          </Form.Control>
        </InputGroup>
    </Form>
  </BootstrapNavbar>
}

export default Navbar;
