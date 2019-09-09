import React from 'react';
import './IdeaCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Octicon, {Pencil, Trashcan} from "@primer/octicons-react";
import Badge from "react-bootstrap/Badge";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export default function IdeaCard({card, onDelete, onEdit, setText}) {

  function ListItem(props) {
    const src = props['data-sourcepos'];
    const start = src.split("-")[0];
    const [startRow, startCol] = start.split(":");

    function toggle() {
      const lines = card.text.split('\n');
      const changedLine = lines[startRow - 1];
      const idx = /\[[\sx]]/.exec(changedLine.slice(Number(startCol))).index + Number(startCol) + 1;
      const newChar = changedLine[idx] === ' ' ? 'x' : ' ';
      console.log(idx, newChar, changedLine);
      const newString = [
        ...lines.slice(0, startRow - 1),
        changedLine.substr(0, idx) + newChar + changedLine.substr(idx + 1),
        ...lines.slice(startRow, lines.length)
      ];
      setText(newString.join("\n"));
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


  return <Card style={{}} className={"IdeaCard"}>
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Subtitle>{card.labels.map(label => <Badge variant={"primary"} key={label}>{label}</Badge>)}</Card.Subtitle>
      <Card.Text as={"div"}><ReactMarkdown source={card.text} renderers={{listItem: ListItem}}
                                           sourcePos={true}/></Card.Text>
    </Card.Body>
    <Card.Footer className={"text-right"}>
      <Button className={"edit"} variant={"secondary"} size="sm" onClick={onEdit}>
        <Octicon icon={Pencil} size='small'/>
      </Button>
      <Button className={"delete"} variant={"danger"} size="sm" onClick={onDelete}>
        <Octicon icon={Trashcan} size='small'/>
      </Button>
    </Card.Footer>
  </Card>
}

IdeaCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired
};
