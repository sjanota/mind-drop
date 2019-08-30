import React from 'react';
import './AddCardModal.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddCardModal({show, onSaveAndClose,onClose}) {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  function withCleanup(callback) {
    return () => {
      setText("");
      setTitle("");
      callback();
    }
  }

  return <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>New card</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Title:</Form.Label>
          <Col>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder={"Title"}/>
          </Col>
        </Form.Group>
        <Form.Label>Text:</Form.Label>
        <Form.Control value={text} onChange={(e) => setText(e.target.value)} as={"textarea"} rows={5}/>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={withCleanup(onClose)}>
        Close
      </Button>
      <Button variant="primary" onClick={withCleanup(() => onSaveAndClose({
        title: title,
        text: text
      }))}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}

export default AddCardModal;
