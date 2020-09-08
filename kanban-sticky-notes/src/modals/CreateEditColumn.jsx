import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function CreateEditColumn(props) {

    const initialState = props.columnModal.targetColumn;

    let submitButtonText = "";
    if (props.columnModal.modalInfo.type === "create"){
      submitButtonText = "Create";
    } else {
      submitButtonText = "Save";
    }
  
    const [column, setColumn] = useState({
      categoryId: initialState.categoryId,
      name: initialState.name
    });
  
  
    function submit(event){
        event.preventDefault();
      props.onSubmit(column);
      props.onHide();
    }
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setColumn(prev => {
        return {
          ...prev,
          [name]: value
        };
      });
    }

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Column Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Enter column name"
              name="name"
              value={column.name}
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