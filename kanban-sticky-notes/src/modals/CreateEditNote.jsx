import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


/**
 * Create new note to be added to the board. 
 * New note consists of a title (required), description, and category(required).
 * @param {object} props Component props 
 */

function CreateNewNote(props) {

  const initialState = props.modal.init;
  let submitButtonText = "";
  if (props.modal.info.type === "create"){
    submitButtonText = "Create";
  } else {
    submitButtonText = "Save";
  }

  const [note, setNote] = useState({
    id: initialState.id,
    category: props.categories[0].name, 
    title: initialState.title, 
    description: initialState.description
  });

  function submitNote(event){
    
    props.onSubmit(note);
    event.preventDefault();
    if (props.modal.info.type==="create") {
      props.onHide();
    } else {
      props.showModal("note", true, "view","View Note", note)
    }
    
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  const categoryList = props.categories.map(category => {
    return (<option> {category.name} </option>);
  });

  return (

      <>
        <Modal.Body>
          <Form id="new-note-form">
            <Form.Group controlId="formNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              name="title"
              value={note.title}
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

            <Form.Group controlId="formNoteCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                name="category"
                value={note.category}
                as="select"
                required
                onChange={handleChange}
                >
                {categoryList}
              </Form.Control>
            </Form.Group>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button 
          variant="primary" 
          type="submit" 
          form="new-note-form" onClick={submitNote}>
            {submitButtonText}
          </Button>
        </Modal.Footer>
      </>

  );
}

export default CreateNewNote;
