import React from 'react';
import './CardCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Octicon, {Trashcan} from "@primer/octicons-react";

function CardCard({card, onDelete}) {
  return <Card style={{}}>
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>{card.text}</Card.Text>
    </Card.Body>
    <Card.Footer className={"text-right"}>
      <Button variant={"danger"} size="sm" onClick={onDelete}>
        <Octicon icon={Trashcan} size='small'/>
      </Button>
    </Card.Footer>
  </Card>
}

export default CardCard;