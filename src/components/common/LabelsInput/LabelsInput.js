import React from 'react';
import './LabelsInput.css';
import Badge from "react-bootstrap/Badge";
import Octicon, {X} from "@primer/octicons-react";

function RemovableLabel({label, onDelete}) {
  return <Badge className={"RemovableLabel"} variant={"primary"}>
    <span>{label}</span>
    <button onClick={onDelete}><Octicon width={8} icon={X}/></button>
  </Badge>
}

function LabelsInput({labels, setLabels}) {
  const [inputValue, setInputValue] = React.useState("");

  const onChange = (evt) => {
    const value = evt.target.value;
    if (value.endsWith(" ")) {
      setInputValue("");
      setLabels(old => [...old, value.trim()]);
    } else {
      setInputValue(value);
    }
  };

  const onDeleteLabel = (label) => () => {
    setLabels(old => [...old.slice(0, old.indexOf(label)), ...old.slice(old.indexOf(label) + 1, old.length)])
  };

  return <div className={"form-control LabelsInput"}>
    {labels.map(l => <RemovableLabel label={l} key={l} onDelete={onDeleteLabel(l)}/>)}
    <input type='text' value={inputValue} onChange={onChange} className={"form-control"}/>
  </div>
}

export default LabelsInput;
