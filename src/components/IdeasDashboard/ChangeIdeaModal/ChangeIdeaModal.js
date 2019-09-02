import React from 'react';
import './ChangeIdeaModal.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function MyLabelsInput({labels, setLabels}) {
  const [inputValue, setInputValue] = React.useState("");

  const onChange = (evt) => {
    const value = evt.target.value;
    if (value.endsWith(" ")) {
      setInputValue("");
      setLabels(old => [...old, value.trim()]);
    } else {
      setInputValue(value);
    }
  };

  return <div className={"form-control"} style={{display: "flex", alignItems: "center", flexWrap: 'wrap', padding: 0, height: 'auto'}}>
    {labels.map(l => <Badge variant={"primary"} key={l} style={{margin: "6px"}}>{l}</Badge>)}
    <input type='text' value={inputValue} onChange={onChange} className={"form-control"} style={{width: 'auto', flexGrow: 2, border: 'none', background: 'transparent', minWidth: '30px'}}/>
  </div>
}

function ChangeIdeaModal({show, onSave: onSaveUpstream, onCancel: onCancelUpstream, value}) {
  const [title, setTitle] = React.useState(value.title || "");
  const [text, setText] = React.useState(value.text || "");
  const [labels, setLabels] = React.useState(value.labels || []);
  const firstInputRef = React.useRef(null);

  const resetValue = () => {
    setTitle(value.title || "");
    setText(value.text || "");
    setLabels(value.labels || []);
  };

  React.useEffect(resetValue, [value]);

  React.useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [firstInputRef]);

  const withClear = (cb) => (arg) => {
    resetValue();
    cb(arg)
  };
  const onSave = withClear(onSaveUpstream);
  const onCancel = withClear(onCancelUpstream);

  return <Modal show={show} onHide={onCancel} centered>
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
            <MyLabelsInput labels={labels} setLabels={setLabels}/>
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
