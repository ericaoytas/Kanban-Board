import React, { useState } from "react";
import Columns from "./Columns";
import NoteModal from "../modals/NoteModal";

import NewDropdown from './NewDropdown';
import ColumnModal from "../modals/ColumnModal";
function Board(props) {

  // Hooks
  const [noteModalState, setNoteModalState] = useState({
    modalInfo: {
      isShow: false,
      type: "create",
      title: "Create New Note"
    },
    targetNote: {}
  });
  const [columnModalState, setColumnModalState] = useState({
    modalInfo: {
      isShow: false,
      type: "create",
      title: "Create New Column"
    },
    targetColumn: {}
  });
  const [notes, setNotes] = useState(props.noteData.notes);
  const [columns, setColumns] = useState(props.noteData.categories);

  // Note Modal functions
  function updateNoteModal(event, type, note, isShow) {

    let title="";

    switch (type) {
      case "create":
        title="Create A New Note";
        break;
      case "view":
        title="View Note";
        break;
      case "edit":
        title="Edit Note";
        break;
      default: 
        title="";
    }

    setNoteModalState(prevInfo => {

      return ({
        ...prevInfo,
        modalInfo: {
          title: title,
          type: type,
          isShow: isShow,
        },
        targetNote: note
      });
      
    });
  }

  function hideNoteModal() {
    setNoteModalState(prevInfo => {
      return ({
        ...prevInfo,
        modalInfo: {
          title: prevInfo.modalInfo.title,
          type: prevInfo.modalInfo.type,
          isShow: false
        }
      });
      
    });
  }

  // Add Note, Delete Note, Update Note
  function addNote(newNote) {
    setNotes((prevState) => {
      return [
        ...prevState,
        {
          ...newNote,
        },
      ];
    });
  }

  function deleteNote(noteId) {
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => {
        return noteItem.noteId !== noteId;
      });
    });
  }

  function updateNote(updatedNote) {
    const updatedNotes = notes.map(note => {
      if (note.noteId === updatedNote.noteId) {
        return ({
          ...note, 
          category: updatedNote.category,
          title: updatedNote.title,
          description: updatedNote.description
        });
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
  } 

  // Add, delete, update Columns
  function addColumn(newColumn){
    setColumns(prevColumns => {
      return [
        ...prevColumns,
        {
          ...newColumn
        }
      ]
    })
  }

  // Column Modal functions
  function updateColumnModal(event, type, column, isShow){
    
    let title="Create New Column"

    setColumnModalState(prevInfo => {

      return ({
        ...prevInfo,
        modalInfo: {
          title: title,
          type: type,
          isShow: isShow,
        },
        targetColumn: column
      });
      
    });
  }

  function hideColumnModal() {
    setColumnModalState(prevInfo => {
      return ({
        ...prevInfo,
        modalInfo: {
          title: prevInfo.modalInfo.title,
          type: prevInfo.modalInfo.type,
          isShow: false
        }
      });
      
    });
  }

  // Drag and Drop functions
  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event, category) {
    let id = event.dataTransfer.getData("id");

    const updatedNote = notes.find((note) => {
      return note.noteId === id;
    });
    updatedNote.category = category;
    deleteNote(id);
    addNote(updatedNote);
  }



  return (
    <div className="board">
      <NewDropdown 
        updateNoteModal={updateNoteModal}
        updateColumnModal={updateColumnModal}
      />
      <NoteModal 
        onSubmit={noteModalState.modalInfo.type === "create" ? addNote : updateNote}
        show={noteModalState.modalInfo.isShow}
        onHide={(event) => hideNoteModal()}
        categories={props.noteData.categories}
        noteModal={noteModalState}
        showModal={updateNoteModal}
      />
      <ColumnModal 
        onSubmit={addColumn}
        show={columnModalState.modalInfo.isShow}
        onHide={()=>hideColumnModal()}
        columnModal={columnModalState}
        showModal={updateColumnModal}
      />

      <h1>Board Title</h1>
      <Columns 
        categories={columns} 
        notes={notes} 
        onDrop={onDrop}
        onDragOver={onDragOver}
        showModal={updateNoteModal}
        />
    </div>
  );
}

export default Board;
