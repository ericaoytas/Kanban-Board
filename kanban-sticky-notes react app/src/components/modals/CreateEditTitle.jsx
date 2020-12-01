import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Notes from "../components/Notes";
import {generateHexString} from '../hexGenerator';
function CreateEditColumn(props) {

    const initialState = props.modal.init;

    let submitButtonText = "";
    if (props.modal.info.type === "create"){
      submitButtonText = "Create";
    } else {
      submitButtonText = "Save";
    }
  
    const [title, setTitle] = useState({
      id: initialState.id,
      name: initialState.name
    });
  
    function submit(event){
      event.preventDefault();
      props.onSubmit(title); 
      props.onHide();
    }
  
    function handleChange(event) {
      const { name, value } = event.target;

      setTitle(prev => {
        return {
          prev,
          [name]: value
        };
      });
    }

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder= {"Enter " + props.modal.type + " name"} 
              name="name"
              value={title.name}
              autoComplete="off"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={submit}>
          {submitButtonText}
        </Button>
      </Modal.Footer>
    </>
  );
}

export default CreateEditColumn;