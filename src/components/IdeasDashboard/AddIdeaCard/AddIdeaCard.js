import React from 'react';
import './AddIdeaCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Octicon, {Plus} from "@primer/octicons-react";

function AddIdeaCard({onClick}) {
  return <Card bg={"secondary"} className={"AddIdeaCard"}>
    <Card.Body>
      <Button variant={"dark"} style={{width: "100%", height: "100%"}}
              onClick={onClick}><Octicon icon={Plus} size={"medium"}/></Button>
    </Card.Body>
  </Card>
}

export default AddIdeaCard;
