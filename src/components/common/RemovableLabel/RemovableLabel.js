import React from 'react';
import './RemovableLabel.css';
import Badge from "react-bootstrap/Badge";
import Octicon, {X} from "@primer/octicons-react";

function RemovableLabel({label, onDelete}) {
  return <Badge className={"RemovableLabel"} variant={"primary"}>
    <span>{label}</span>
    <button onClick={onDelete}><Octicon width={8} icon={X}/></button>
  </Badge>
}

export default RemovableLabel;
