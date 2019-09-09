import React from 'react';
import './IdeaCard.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Octicon, {Pencil, Trashcan} from "@primer/octicons-react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";
import MarkdownViewer from "../../MarkdownViewer/MarkdownViewer";

export default function IdeaCard({card, onDelete, onEdit, setText}) {
  return <Card style={{}} className={"IdeaCard"}>
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Subtitle>{card.labels.map(label => <Badge variant={"primary"} key={label}>{label}</Badge>)}</Card.Subtitle>
      <Card.Text as={"div"}>
        <MarkdownViewer source={card.text} setSource={setText}/>
      </Card.Text>
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
