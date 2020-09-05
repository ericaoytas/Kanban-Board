import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ViewNote(props) {

    const note = props.notes.find((nt) => {
        return nt.noteId === props.noteId;
    })

    console.log(note);

    return (
        <>
          <Modal.Body>
          <div>
            <label for="noteTitle"> Title </label>
            <p id="noteTitle">{note.title}</p>
          </div>
          <div>
            <label for="noteDescription"> Description </label>
            <p id="noteDescription">{note.description}</p>
          </div>
          <div>
            <label for="noteCategory"> Category </label>
            <p id="noteCategory">{note.category}</p>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" >
              Edit
            </Button>
          </Modal.Footer>
        </>
  
    );
}

export default ViewNote;