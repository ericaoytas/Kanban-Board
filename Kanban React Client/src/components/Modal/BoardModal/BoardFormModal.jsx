import React, {useState, useEffect} from 'react'

import {Modal, Form, Button} from 'react-bootstrap';

function BoardFormModal(props) {

    const [board, setBoard] = useState({...props.board});

    useEffect(() => {
      setBoard(props.board);
    },[props.board]);

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
    function saveBoard(){
        props.operations.update(board);
    }

    // Delete Board
    function deleteBoard(){
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
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Name
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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
    
                <Button onClick={() => {if (window.confirm('Are you sure you want to permanently remove this item?')) deleteBoard() }}>Delete</Button> 
              
              <Button onClick={props.onHide}>Cancel</Button> 
              <Button onClick={saveBoard}>Save</Button>
            </Modal.Footer>
          </Modal>
    );
}

export default BoardFormModal;