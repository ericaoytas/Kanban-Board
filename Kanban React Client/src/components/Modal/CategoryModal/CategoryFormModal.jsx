import React, {useState, useEffect} from 'react'
import {Modal, Form, Button} from 'react-bootstrap';
import {ModalType} from '../../../constants/CustomEnums';

function CategoryFormModal(props) {

    const [category, setCategory] = useState({...props.category});

    useEffect(() => {
        setCategory(props.category);
      // eslint-disable-next-line
    },[props.category.id, props.category.name]);

    function handleChange(event) {
        const { name, value } = event.target;
  
        setCategory(prev => {
          return {
            ...prev,
            [name]: value
          };
        });
    }

    // Update Board
    function saveCategory(){
      props.modal.type === ModalType.UPDATE ? props.operations.update(category) : props.operations.create(category);
    }

    // Delete Board
    function deleteCategory(){
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

          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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
    
                <Button onClick={() => {if (window.confirm('Are you sure you want to permanently remove this item?')) deleteCategory() }}>Delete</Button> 
              
              <Button onClick={props.onHide}>Cancel</Button> 
              <Button onClick={saveCategory}>Save</Button>
            </Modal.Footer>
          </Modal>
          </>
    );
}

export default CategoryFormModal;