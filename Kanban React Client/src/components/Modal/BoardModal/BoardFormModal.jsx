import React, { useState, useEffect } from 'react'

import { Modal, Form, Button } from 'react-bootstrap';
import { ModalType } from '../../../constants/CustomEnums';

import '../Modal.css';

function BoardFormModal(props) {

  const [board, setBoard] = useState({ ...props.board });

  useEffect(() => {
    setBoard(props.board);
    // eslint-disable-next-line
  }, [props.board.id, props.board.name]);

  function handleChange(event) {
    const { name, value } = event.target;

    setBoard(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  // Update Board
  function saveBoard() {
    props.modal.type === ModalType.UPDATE ? props.operations.update(board) : props.operations.create(board);
  }

  // Delete Board
  function deleteBoard() {
    props.operations.delete(board.id);
  }

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      show={props.modal.isOpen}
      onHide={props.onHide}
      dialogClassName="BoardModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={saveBoard}>
          <Form.Group controlId="editBoardName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={board.name}
              type="text"
              placeholder="Enter new name"
              required
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
            <Button onClick={() => { if (window.confirm('Are you sure you want to permanently remove this item?')) deleteBoard() }} className="delete-button">Delete</Button>
            : null
        }
        <Button onClick={props.onHide}>Cancel</Button>
        <Button type="submit" onClick={saveBoard}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BoardFormModal;