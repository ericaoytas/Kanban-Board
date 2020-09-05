import React, { useState } from "react";
import Columns from "./Columns";
import CreateNewNote from "./CreateNewNote";
import NoteModal from "./NoteModal";

function Board(props) {
  const [modalInfo, setModalInfo] = useState({
    isShow: false,
    type: "create",
    targetNoteId: 0,


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

  function showModal(event, type, noteId, isShow) {

    setModalInfo(prevInfo => {
      return ({
        ...prevInfo,
        type: type,
        isShow: isShow,
        targetNoteId: noteId
      });
      
    });
  }

  return (
    <div className="board">
      <button onClick={(event) => showModal(event, "create", 0, true)}>Click here</button>
      {/* <CreateNewNote
        onadd={addNote}
        show={modalShow}
        onHide={() => setModalShow(false)}
        categories={noteData.categories}
      /> */}

      <NoteModal 
        onadd={addNote}
        show={modalInfo.isShow}
        onHide={(event) => showModal(event, "create", 0, false)}
        noteData={noteData}
        noteId={modalInfo.targetNoteId}
        modalType={modalInfo.type}
        modalTitle="Create New Note"
      />

      <h1>Board Title</h1>
      <Columns 
        categories={noteData.categories} 
        notes={notes} 
        onDrop={onDrop}
        onDragOver={onDragOver}
        showModal={showModal}
        />
    </div>
  );
}

export default Board;
