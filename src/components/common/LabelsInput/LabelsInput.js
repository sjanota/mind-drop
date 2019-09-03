import React from 'react';
import './LabelsInput.css';
import PropTypes from 'prop-types';
import RemovableLabel from "../RemovableLabel/RemovableLabel";

export default function LabelsInput({labels, addLabel, deleteLabel}) {
  const [inputValue, setInputValue] = React.useState("");

  const onChange = (evt) => {
    const value = evt.target.value;
    if (value.endsWith(" ")) {
      setInputValue("");
      addLabel(value.trim());
    } else {
      setInputValue(value);
    }
  };

  const onDeleteLabel = (label) => () => {
    deleteLabel(label)
  };

  return <div className={"form-control LabelsInput"}>
    {labels.map(l => <RemovableLabel label={l} key={l} onDelete={onDeleteLabel(l)}/>)}
    <input type='text' value={inputValue} onChange={onChange} className={"form-control"}/>
  </div>
}

LabelsInput.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLabel: PropTypes.func.isRequired,
  deleteLabel: PropTypes.func.isRequired
};
