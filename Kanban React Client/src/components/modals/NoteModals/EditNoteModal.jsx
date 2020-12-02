import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
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
  
    function viewNote() {
        props.showModal(true, "ViewNote", note.id);
    }

    // Update Note
    function saveNote() {
        props.update(note);
        viewNote();
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
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
          <Button onClick={viewNote}>Cancel</Button> 
          <Button onClick={saveNote}>Save</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default EditNoteModal;