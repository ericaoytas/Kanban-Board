import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
function EditNoteModal(props) {

    function viewNote() {
        props.showModal(true, "ViewNote", props.note.id);
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
              name="title"
              value={props.note.name}
              type="text" 
              placeholder="Enter note title" 
              required
            //   onChange={handleChange}
              autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="formNoteDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={props.note.description}
                as="textarea"
                rows="3"
                placeholder="Enter note description"
                // onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={viewNote}>Cancel</Button> 
          <Button onClick={viewNote}>Save</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default EditNoteModal;