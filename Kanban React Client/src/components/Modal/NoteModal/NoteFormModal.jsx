import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { ModalType } from '../../../constants/CustomEnums';
import ColorSelector from '../../Color/ColorSelector';
import '../Modal.css';
function EditNoteModal(props) {

  // State
  const [note, setNote] = useState(props.note);

  useEffect(() => {
    setNote(props.note);
    // eslint-disable-next-line
  }, [props.note.id, props.note.name, props.note.description, props.note.color]);


  // Handle form input change
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  // Note CRUD Operations
  function addNote() {
    props.operations.create(note);
    viewNote();
  }

  function viewNote() {
    props.updateModal(true, ModalType.READ, note.id);
  }

  function saveNote() {
    props.operations.update(note);
    viewNote();
  }

  function deleteNote() {
    props.operations.delete(note.id);
    props.onHide();
  }

  function cancel() {
    props.modal.type === ModalType.CREATE ? props.onHide() : viewNote();
  }

  function onSubmit(event) {
    event.preventDefault();
    props.modal.type === ModalType.UPDATE ? saveNote() : addNote();
  }

  return (
    <>
      <style>
        {
          `.modal-content {
            background-color: #${note.color.hexValue} !important;
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
        dialogClassName="NoteModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
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
            <Form.Group controlId="formNoteDescription">
              <Form.Label>Color</Form.Label>
              <ColorSelector colorId={note.color.id} handleChange={handleChange}/>
            </Form.Group>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>

          { // Show delete button only if editing a note (not creating)
            props.modal.type === ModalType.UPDATE ?
              <Button onClick={() => { if (window.confirm('Are you sure you want to permanently remove this item?')) deleteNote() }} className="delete-button">Delete</Button>
              : null
          }

          <Button onClick={cancel}>Cancel</Button>
          <Button type="submit" onClick={onSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}
export default EditNoteModal;