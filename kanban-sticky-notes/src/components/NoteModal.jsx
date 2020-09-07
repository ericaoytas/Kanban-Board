import React from "react";
import Modal from 'react-bootstrap/Modal'
import CreateEditNote from './CreateEditNote'
import ViewNote from './ViewNote'
function NoteModal(props) {

    let modalBodyAndFooter = null;

    switch(props.noteModal.modalInfo.type) {
        case "create":
        case "edit":
            modalBodyAndFooter = <CreateEditNote 
            onSubmit={props.onSubmit}
            show={props.show}
            onHide={props.onHide}
            categories={props.categories}
            noteModal={props.noteModal}
            />
            break;
        case "view":
            modalBodyAndFooter = <ViewNote 
              show={props.show}
              onHide={props.onHide}
              showModal={props.showModal}
              noteModal={props.noteModal}
            />
            break;
        default:
          modalBodyAndFooter = <CreateEditNote 
          onSubmit={props.onSubmit}
          show={props.show}
          onHide={props.onHide}
          categories={props.categories}
          noteModal={props.noteModal}
          />
            break;
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-style"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.noteModal.modalInfo.title}
        </Modal.Title>
      </Modal.Header>
      {modalBodyAndFooter}
    </Modal>
  );
}

export default NoteModal;
