import React, { useState } from "react";
import Columns from "./Columns";
import CreateNewNote from "./CreateEditNote";
import NoteModal from "./NoteModal";
import {generateHexString} from "../hexGenerator";

function Board(props) {
  const [noteModalState, setNoteModalState] = useState({
    modalInfo: {
      isShow: false,
      type: "create",
      title: "Create New Note"
    },
    targetNote: {}
  });
  const noteData = props.noteData;
  const [notes, setNotes] = useState(noteData.notes);

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

    console.log(updatedNote)
    console.log(updatedNotes);

    setNotes(updatedNotes);
  } 


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

  const emptyNote = {
    noteId: generateHexString(),
    title: "",
    description: ""
  }

  return (
    <div className="board">
      <button onClick={(event) => updateNoteModal(event, "create", emptyNote, true)}>Click here</button>

      <NoteModal 
        onSubmit={noteModalState.modalInfo.type === "create" ? addNote : updateNote}
        show={noteModalState.modalInfo.isShow}
        onHide={(event) => hideNoteModal()}
        categories={noteData.categories}
        noteModal={noteModalState}
        showModal={updateNoteModal}
      />

      <h1>Board Title</h1>
      <Columns 
        categories={noteData.categories} 
        notes={notes} 
        onDrop={onDrop}
        onDragOver={onDragOver}
        showModal={updateNoteModal}
        />
    </div>
  );
}

export default Board;
