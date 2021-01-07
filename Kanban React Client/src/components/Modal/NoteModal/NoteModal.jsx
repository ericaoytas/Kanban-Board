import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {ModalType} from '../../../constants/CustomEnums';

function ViewNoteModal(props) {

  function editNote() {
    props.updateModal(true, ModalType.UPDATE, props.note.id);
  }

  return (
    <div id="NoteModal">
      <style>
        {
          `.modal-content {
            background-color: #${props.note.color.hexValue} !important;
          }
          `
        }
      </style>
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      show={props.modal.isOpen}
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

    </div>
  );
}

export default ViewNoteModal;
