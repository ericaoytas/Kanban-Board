import React from "react";
import Modal from 'react-bootstrap/Modal'
import CreateEditNote from './CreateEditNote'
import ViewNote from './ViewNote'
function NoteModal(props) {

    let modalBodyAndFooter = null;

    switch(props.modal.info.type) {
        case "create":
        case "edit":
            modalBodyAndFooter = <CreateEditNote 
            onSubmit={props.onSubmit}
            show={props.show}
            onHide={props.onHide}
            categories={props.categories}
            modal={props.modal}
            />
            break;
        case "view":
            modalBodyAndFooter = <ViewNote 
              show={props.show}
              onHide={props.onHide}
              showModal={props.showModal}
              modal={props.modal}
            />
            break;
        default:
          modalBodyAndFooter = <CreateEditNote 
          onSubmit={props.onSubmit}
          show={props.show}
          onHide={props.onHide}
          categories={props.categories}
          modal={props.modal}
          />
            break;
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="note-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modal.info.title}
        </Modal.Title>
      </Modal.Header>
      {modalBodyAndFooter}
    </Modal>
  );
}

export default NoteModal;
