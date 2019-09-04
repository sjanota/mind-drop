import React from 'react';
import './ChangeIdeaModal.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LabelsInput from "../../common/LabelsInput/LabelsInput";
import PropTypes from 'prop-types';
import removeFromList from "../../../util/immutable/removeFromList";
import addToList from "../../../util/immutable/addToList";

const TITLE_SET = 'TITLE_SET';
const titleSet = (title) => ({type: TITLE_SET, title});
const TEXT_SET = 'TEXT_SET';
const textSet = (text) => ({type: TEXT_SET, text});
const LABEL_ADDED = 'LABEL_ADDED';
const labelAdded = (label) => ({type: LABEL_ADDED, label});
const LABEL_REMOVED = 'LABEL_REMOVED';
const labelRemoved = (label) => ({type: LABEL_REMOVED, label});
const RESET = 'RESET';
const reset = (value) => ({type: RESET, value});

const initialState = {
  title: "",
  text: "",
  labels: []
};

function reducer(state, action) {
  switch (action.type) {
    case TITLE_SET:
      return {...state, title: action.title};
    case TEXT_SET:
      return {...state, text: action.text};
    case LABEL_ADDED:
      return {...state, labels: addToList(state.labels, action.label)};
    case LABEL_REMOVED:
      return {...state, labels: removeFromList(state.labels, action.label)};
    case RESET:
      return {
        title: action.value.title || initialState.title,
        text: action.value.text || initialState.text,
        labels: action.value.labels || initialState.labels
      };
    default:
      break;
  }
}

export default function ChangeIdeaModal({show, onSave: onSaveUpstream, onCancel: onCancelUpstream, value}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const firstInputRef = React.useRef();

  const resetValue = () => {
    dispatch(reset(value));
  };

  React.useEffect(resetValue, [value]);

  const withClear = (cb) => (arg) => {
    cb(arg);
    resetValue();
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
            <Form.Control
              ref={firstInputRef}
              value={state.title}
              onChange={(e) => dispatch(titleSet(e.target.value))}
              placeholder={"Title"}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Label:</Form.Label>
          <Col>
            <LabelsInput
              labels={state.labels}
              addLabel={label => dispatch(labelAdded(label))}
              deleteLabel={label => dispatch(labelRemoved(label))}
            />
          </Col>
        </Form.Group>
        <Form.Label>Text:</Form.Label>
        <Form.Control
          value={state.text}
          onChange={(e) => dispatch(textSet((e.target.value)))}
          as={"textarea"}
          rows={5}
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onCancel}>
        Close
      </Button>
      <Button variant="primary" onClick={() => onSave({
        title: state.title,
        text: state.text,
        labels: state.labels
      })}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}

ChangeIdeaModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
