import React from "react";
import Modal from "react-bootstrap/Modal";
import CreateEditColumn from './CreateEditColumn';
function ColumnModal(props) {

  let modalBodyAndFooter = <CreateEditColumn 
            onSubmit={props.onSubmit}
            show={props.show}
            onHide={props.onHide}
            modal={props.modal}
            />

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="column-modal"
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

export default ColumnModal;
