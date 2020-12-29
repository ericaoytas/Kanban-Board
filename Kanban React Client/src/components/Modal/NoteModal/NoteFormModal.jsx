import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import {ModalType} from '../../../constants/CustomEnums';
function EditNoteModal(props) {

    // State
    const [note, setNote] = useState(props.note);
  
    // Set state
    function handleChange(event) {
      const { name, value } = event.target;
  
      setNote(prev => {
        return {
          ...prev,
          [name]: value
        };
      });
    }
  
    // Create
    function addNote() {
      props.operations.create(note);
      viewNote();
    }
 
    // Read
    function viewNote() {
        props.updateModal(true, ModalType.READ , note.id);
    }

    // Update
    function saveNote() {
        props.operations.update(note);
        viewNote();
    }

    // Delete Note
    function deleteNote() {
        props.operations.delete(note.id);
        props.onHide();
    }
    

    function cancel() {
      props.modal.type === ModalType.CREATE ? props.onHide() : viewNote();
    }

    return (
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
          <Form id="new-note-form">
            <Form.Group controlId="formNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              name="name"
              value={note.name}
              type="text" 
              placeholder="Enter note title" 
              required
              onChange={handleChange}
              autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="formNoteDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={note.description}
                as="textarea"
                rows="3"
                placeholder="Enter note description"
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>

          { // Show delete button only if editing a note (not creating)
            props.modal.type === ModalType.UPDATE ? 
              <Button onClick={() => {if (window.confirm('Are you sure you want to permanently remove this item?')) deleteNote() }}>Delete</Button> 
              : null
          }
          
          <Button onClick={cancel}>Cancel</Button> 
          <Button onClick={() => props.modal.type === ModalType.UPDATE? saveNote() : addNote() }>Save</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default EditNoteModal;