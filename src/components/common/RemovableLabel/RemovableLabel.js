import React from 'react';
import './RemovableLabel.css';
import Badge from "react-bootstrap/Badge";
import Octicon, {X} from "@primer/octicons-react";
import PropTypes from 'prop-types';

export default  function RemovableLabel({label, onDelete}) {
  return <Badge className={"RemovableLabel"} variant={"primary"}>
    <span>{label}</span>
    <button onClick={onDelete}><Octicon width={8} icon={X}/></button>
  </Badge>
}

RemovableLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
