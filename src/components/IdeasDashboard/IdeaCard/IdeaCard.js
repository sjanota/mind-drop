import React from 'react';
import './IdeaCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Octicon, {Trashcan, Pencil} from "@primer/octicons-react";
import Badge from "react-bootstrap/Badge";

function IdeaCard({card, onDelete, onEdit}) {
  return <Card style={{}}>
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Subtitle>{card.labels.map(label => <Badge variant={"primary"} key={label}>{label}</Badge>)}</Card.Subtitle>
      <Card.Text>{card.text}</Card.Text>
    </Card.Body>
    <Card.Footer className={"text-right"}>
      <Button variant={"secondary"} size="sm" onClick={onEdit}>
        <Octicon icon={Pencil} size='small'/>
      </Button>
      <Button variant={"danger"} size="sm" onClick={onDelete}>
        <Octicon icon={Trashcan} size='small'/>
      </Button>
    </Card.Footer>
  </Card>
}

export default IdeaCard;
