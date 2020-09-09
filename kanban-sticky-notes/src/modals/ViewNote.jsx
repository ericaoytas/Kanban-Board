import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ViewNote(props) {

    const note = props.modal.init;

    return (
        <>
          <Modal.Body>
          <div>
            <label for="note-title"> Title </label>
            <div class="scrollable-container"><p id="note-title">{note.title}</p></div>
          </div>
          <div>
            <label for="note-description"> Description </label>
            <div class="scrollable-container"><p id="note-description">{note.description}</p></div>
          </div>
          <div >
            <label for="note-category"> Category </label>
            <p id="note-category">{note.category}</p>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" 
              name="note"
              onClick={() => {
                props.showModal("note", true, "edit","Edit Note", note);
              }}>
              Edit
            </Button>
          </Modal.Footer>
        </>
  
    );
}

export default ViewNote;