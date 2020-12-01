import React, { useState } from "react";
import Columns from "../../Columns";
import NoteModal from "../../modals/NoteModal";
import NewDropdown from "../../NewDropdown";
import TitleModal from "../../modals/TitleModal";
import MessageModal from "../../modals/MessageModal";




function Board(props) {
  // Hooks
  const [boardTitle, setBoardTitle] = useState(props.noteData.board[0]);
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
        return noteItem.id !== noteId;
      });
    });
  }

  function updateNote(updatedNote) {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
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

  function updateNotes(updatedNotes) {
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
      if (column.id === updatedColumn.id) {

        // update notes 

        notes.map(note => {
          if(note.category === column.name) {
            note.category= updatedColumn.name;
            updateNote(note);
          }
        })

        return {
          ...column,
          id: updatedColumn.category,
          name: updatedColumn.name,
        };
      } else {
        return column;
      }
    });
    setColumns(updatedColumns);
    console.log(notes);
  }

  // Update Board Title
  function updateBoardTitle(newTitle) {
    setBoardTitle(newTitle);
  }

  // Drag and Drop functions
  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event, category) {
    let id = event.dataTransfer.getData("id");

    const updatedNote = notes.find((note) => {
      return note.id === id;
    });
    updatedNote.category = category;
    deleteNote(id);
    addNote(updatedNote);
  }

  return (
    <div className="board">
      <MessageModal dialogClassName="rotate-message" title="Landscape Only" message="Please rotate phone to continue." />
      <NewDropdown showModal={updateModal} />

      <NoteModal
        onSubmit={modalState.info.type === "create" ? addNote : updateNote}
        show={modalState.type==="note" && modalState.info.isShow}
        onHide={() => hideModal()}
        categories={columns}
        modal={modalState}
        showModal={updateModal}
      />
      <TitleModal
        onSubmit={modalState.type==="category"
                    ? (modalState.info.type === "create" ? addColumn : updateColumn) 
                    : updateBoardTitle }
        show={(modalState.type==="category" || modalState.type==="board") && modalState.info.isShow}
        onHide={() => hideModal()}
        modal={modalState}
        showModal={updateModal}
        notes={notes}
        updateNotes={updateNotes}
      />

      <h1 onClick={(ev)=> updateModal("board", true, "edit", "Edit Board Title", boardTitle) }>
        {boardTitle.name}
      </h1>
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
