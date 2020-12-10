import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function ViewNoteModal(props) {

  function editNote() {
    props.updateModal(true, "EditNote", props.note.id);
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      show={props.modal.isShow}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.note.name}</h4>
        <p>
          {props.note.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button> 
        <Button onClick={editNote}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewNoteModal;
