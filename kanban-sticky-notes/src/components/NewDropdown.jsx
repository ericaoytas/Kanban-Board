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
        <Dropdown id="add-dropdown">
        <Dropdown.Toggle  id="dropdown-basic">
          + New
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={(ev)=>props.updateNoteModal(ev, "create", emptyNote, true)}>New Note</Dropdown.Item>
          <Dropdown.Item as="button" onClick={(ev) => props.updateColumnModal(ev, "create", emptyColumn, true)}>New Column</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    );
}

export default NewDropdown;