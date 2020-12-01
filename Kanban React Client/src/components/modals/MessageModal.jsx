import React from "react";
import Modal from "react-bootstrap/Modal";

function MessageModal(props) {
  return (
    <Modal.Dialog backdrop="static" className={props.dialogClassName}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default MessageModal;
