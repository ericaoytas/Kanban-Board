import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { ModalType } from '../../../constants/CustomEnums';
import '../Modal.css';
function CategoryFormModal(props) {

  const [category, setCategory] = useState({ ...props.category });

  useEffect(() => {
    setCategory(props.category);
    // eslint-disable-next-line
  }, [props.category.id, props.category.name]);

  function handleChange(event) {
    const { name, value } = event.target;

    setCategory(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function saveCategory(event) {
    event.preventDefault();
    props.modal.type === ModalType.UPDATE ? props.operations.update(category) : props.operations.create(category);
  }

  function deleteCategory() {
    props.operations.delete(category.id);
  }

  return (
    <>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
        show={props.modal.isOpen}
        onHide={props.onHide}
        dialogClassName="CategoryModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={saveCategory}>
            <Form.Group controlId="editCategoryName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={category.name}
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
              <Button onClick={() => { if (window.confirm('Are you sure you want to permanently remove this item?')) deleteCategory() }} className="delete-button">Delete</Button>
              : null
          }

          <Button onClick={props.onHide}>Cancel</Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoryFormModal;