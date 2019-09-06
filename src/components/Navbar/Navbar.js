import React from 'react';
import './Navbar.css';
import BootstrapNavbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Brand from "./Brand/Brand";
import LabelsInput from "../common/LabelsInput/LabelsInput";
import addToList from "../../util/immutable/addToList";
import removeFromList from "../../util/immutable/removeFromList";
import PropTypes from 'prop-types';


export default function Navbar({labelFilter, setLabelFilter}) {
  const addLabel = label => setLabelFilter(old => addToList(old, label));
  const deleteLabel = label => setLabelFilter(old => removeFromList(old, label));

  return <BootstrapNavbar bg={"dark"} variant={"dark"} className={"Navbar"}>
    <Brand/>
      <Form>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Label</InputGroup.Text>
          </InputGroup.Prepend>
          <LabelsInput labels={labelFilter} addLabel={addLabel} deleteLabel={deleteLabel}/>
        </InputGroup>
    </Form>
  </BootstrapNavbar>
}

Navbar.propTypes = {
  labelFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLabelFilter: PropTypes.func.isRequired
};
