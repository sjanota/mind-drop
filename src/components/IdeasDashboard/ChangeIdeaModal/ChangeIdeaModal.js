import React from 'react';
import './ChangeIdeaModal.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LabelsInput from "../../common/LabelsInput/LabelsInput";

function ChangeIdeaModal({show, onSave: onSaveUpstream, onCancel: onCancelUpstream, value}) {
  const [title, setTitle] = React.useState(value.title || "");
  const [text, setText] = React.useState(value.text || "");
  const [labels, setLabels] = React.useState(value.labels || []);
  const firstInputRef = React.useRef();

  const resetValue = () => {
    setTitle(value.title || "");
    setText(value.text || "");
    setLabels(value.labels || []);
  };

  React.useEffect(resetValue, [value]);

  const withClear = (cb) => (arg) => {
    resetValue();
    cb(arg)
  };
  const onSave = withClear(onSaveUpstream);
  const onCancel = withClear(onCancelUpstream);

  return <Modal show={show} onHide={onCancel} centered onEntered={() => firstInputRef.current.focus()}>
    <Modal.Header closeButton>
      <Modal.Title>New card</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Title:</Form.Label>
          <Col>
            <Form.Control ref={firstInputRef} value={title} onChange={(e) => setTitle(e.target.value)}
                          placeholder={"Title"}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Label:</Form.Label>
          <Col>
            <LabelsInput labels={labels} setLabels={setLabels}/>
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
        labels: labels
      })}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}

export default ChangeIdeaModal;
