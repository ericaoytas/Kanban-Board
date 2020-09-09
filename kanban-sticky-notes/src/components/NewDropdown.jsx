import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import {generateHexString} from "../hexGenerator";
function NewDropdown(props) {

    const emptyNote = {
        noteId: generateHexString(),
        title: "",
        description: ""
      }


      const emptyColumn = {
        categoryId: generateHexString(),
        name: ""
      }

    return (
        <Dropdown id="add-dropdown" class="new-dropdown">
        <Dropdown.Toggle  id="dropdown-basic">
          + New
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item name="note" as="button" href="#" onClick={(ev)=>props.showModal("note", true, "create", "Create New Note", emptyNote)}>New Note</Dropdown.Item>
          <Dropdown.Item name="category" as="button" href="#" onClick={(ev) => props.showModal("category", true, "create", "Create New Column", emptyColumn)}>New Column</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    );
}

export default NewDropdown;