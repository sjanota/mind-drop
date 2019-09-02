import React from 'react';
import './LabelsInput.css';
import Badge from "react-bootstrap/Badge";
import Octicon, {X} from "@primer/octicons-react";

function RemovableLabel({label, onDelete}) {
  return <Badge variant={"primary"} style={{margin: "6px", display: "inline-flex", alignItems: "center"}}>
    <span style={{marginRight: '5px'}}>{label}</span>
    <button onClick={onDelete} style={{border: 'none', background:'transparent', padding: 0, margin: 0, color: 'inherit', display: "inline-flex", alignItems: "center"}}><Octicon width={8} icon={X}/></button>
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

  return <div className={"form-control"} style={{display: "flex", alignItems: "center", flexWrap: 'wrap', padding: 0, height: 'auto'}}>
    {labels.map(l => <RemovableLabel label={l} key={l} onDelete={onDeleteLabel(l)}/>)}
    <input type='text' value={inputValue} onChange={onChange} className={"form-control"} style={{width: 'auto', flexGrow: 2, border: 'none', background: 'transparent', minWidth: '30px'}}/>
  </div>
}

export default LabelsInput;
