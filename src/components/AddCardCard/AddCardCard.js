import React from 'react';
import './AddCardCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AddCardCard({onClick}) {
  return <Card bg={"secondary"}>
    <Card.Body>
      <Button variant={"dark"} style={{width: "100%", height: "100%", fontSize: "3rem"}}
              onClick={onClick}>+</Button>
    </Card.Body>
  </Card>
}

export default AddCardCard;
