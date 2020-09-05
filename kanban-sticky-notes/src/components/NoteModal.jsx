import React from "react";
import Modal from 'react-bootstrap/Modal'
import CreateNewNote from './CreateNewNote'
import ViewNote from './ViewNote'
function NoteModal(props) {


    let modalBodyAndFooter = null;

    switch(props.modalType) {
        case "create":
            modalBodyAndFooter = <CreateNewNote 
            onadd={props.onadd}
            show={props.show}
            onHide={props.onHide}
            categories={props.noteData.categories}
            />
            break;
        case "view":
            modalBodyAndFooter = <ViewNote 
                show={props.show}
                onHide={props.onHide}
                notes={props.noteData.notes}
                noteId={props.noteId}
            />
            break;
        default:
            modalBodyAndFooter = <CreateNewNote 
            onadd={props.onadd}
            show={props.show}
            onHide={props.onHide}
            categories={props.noteData.categories}
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
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      {modalBodyAndFooter}
    </Modal>
  );
}

export default NoteModal;
