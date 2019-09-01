import React from 'react';
import './ChangeCardModal.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ChangeCardModal({show, onSave, onCancel, value}) {
  const [title, setTitle] = React.useState(value.title || "");
  const [text, setText] = React.useState(value.text || "");
  const [label, setLabel] = React.useState(value.label || "Dla mnie");
  const [firstInputRef, setFirstInputRef] = React.useState(null);

  React.useEffect(() => {
    setTitle(value.title || "");
    setText(value.text || "");
    setLabel((value.labels && value.labels[0]) || "Dla mnie");
  }, [value, firstInputRef]);

  React.useEffect(() => {
    if (firstInputRef) {
      firstInputRef.focus()
    }
  }, [firstInputRef]);

  return <Modal show={show} onHide={onCancel} centered>
    <Modal.Header closeButton>
      <Modal.Title>New card</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Title:</Form.Label>
          <Col>
            <Form.Control ref={setFirstInputRef} value={title} onChange={(e) => setTitle(e.target.value)}
                          placeholder={"Title"}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Label:</Form.Label>
          <Col>
            <Form.Control as="select" value={label} onChange={(e) => setLabel(e.target.value)} placeholder={"Label"}>
              <option>Dla mnie</option>
              <option>Dla kogoś</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Label>Text:</Form.Label>
        <Form.Control value={text} onChange={(e) => setText(e.target.value)} as={"textarea"} rows={5}/>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onCancel}>
        Close
      </Button>
      <Button variant="primary" onClick={() => onSave({
        title: title,
        text: text,
        labels: [label]
      })}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}

export default ChangeCardModal;
