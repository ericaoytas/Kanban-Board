import React, { useState } from "react";
import Columns from "./Columns";
import NoteModal from "../modals/NoteModal";
import NewDropdown from "./NewDropdown";
import ColumnModal from "../modals/ColumnModal";
function Board(props) {
  // Hooks
  const [notes, setNotes] = useState(props.noteData.notes);
  const [columns, setColumns] = useState(props.noteData.categories);

  const [modalState, setModalState] = useState({
    info: {
      isShow: false,
      type: "",
      title: "",
    },
    init: {},
    type: "",
  });

  function updateModal(modalType, isShow, type, title, init) {

    setModalState({
      info: {
        isShow: isShow,
        type: type,
        title: title,
      },
      init: init,
      type: modalType
    });
  }

  function hideModal() {
    setModalState((prevInfo) => {
      return {
        ...prevInfo,
        info: {
          isShow: false,
          title: prevInfo.info.title,
          type: prevInfo.info.type,
          
        },
      };
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
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.noteId !== noteId;
      });
    });
  }

  function updateNote(updatedNote) {
    const updatedNotes = notes.map((note) => {
      if (note.noteId === updatedNote.noteId) {
        return {
          ...note,
          category: updatedNote.category,
          title: updatedNote.title,
          description: updatedNote.description,
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
  }

  // Add, delete, update Columns
  function addColumn(newColumn) {
    setColumns((prevColumns) => {
      return [
        ...prevColumns,
        {
          ...newColumn,
        },
      ];
    });
  }

  function updateColumn(updatedColumn) {
    const updatedColumns = columns.map((column) => {
      if (column.categoryId === updatedColumn.categoryId) {

        // update notes 

        notes.map(note => {
          if(note.category === column.name) {
            note.category= updatedColumn.name;
            updateNote(note);
          }
        })

        return {
          ...column,
          categoryId: updatedColumn.category,
          name: updatedColumn.name,
        };
      } else {
        return column;
      }
    });
    setColumns(updatedColumns);
    console.log(notes);
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
      <NewDropdown showModal={updateModal} />
      <NoteModal
        onSubmit={modalState.info.type === "create" ? addNote : updateNote}
        show={modalState.type==="note" && modalState.info.isShow}
        onHide={(event) => hideModal()}
        categories={columns}
        modal={modalState}
        showModal={updateModal}
      />
      <ColumnModal
        onSubmit={modalState.info.type === "create" ? addColumn : updateColumn}
        show={modalState.type==="category" && modalState.info.isShow}
        onHide={() => hideModal()}
        modal={modalState}
        showModal={updateModal}
      />

      <h1>Board Title</h1>
      <Columns
        categories={columns}
        notes={notes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        showModal={updateModal}
      />
    </div>
  );
}

export default Board;
