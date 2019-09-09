import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

export default function ListItem({source, setSource, ...props}) {
  const src = props['data-sourcepos'];
  const start = src.split("-")[0];
  const [startRow, startCol] = start.split(":");

  function toggle() {
    const lines = source.split('\n');
    const changedLine = lines[startRow - 1];
    const idx = /\[[\sx]]/.exec(changedLine.slice(Number(startCol))).index + Number(startCol) + 1;
    const newChar = changedLine[idx] === ' ' ? 'x' : ' ';
    const newString = [
      ...lines.slice(0, startRow - 1),
      changedLine.substr(0, idx) + newChar + changedLine.substr(idx + 1),
      ...lines.slice(startRow, lines.length)
    ];
    setSource(newString.join("\n"));
  }

  var checkbox = null;
  let className = "";
  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = <input type={"checkbox"} checked={checked} onChange={toggle}/>;
    className = "checkboxed"
  }

  return <li className={className}>{checkbox}{props.children}</li>;
}

ListItem.propTypes = {

};
