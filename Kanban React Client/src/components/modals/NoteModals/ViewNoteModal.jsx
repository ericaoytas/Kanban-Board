import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function ViewNoteModal(props) {

  function editNote() {
    props.showModal(true, "EditNote", props.note.id);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.note.name}</h4>
        <p>
          {props.note.description}. Note id is {props.note.id}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* TODO: Delete Note */}
        <Button onClick={props.onHide}>Delete</Button> 
        <Button onClick={editNote}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewNoteModal;
