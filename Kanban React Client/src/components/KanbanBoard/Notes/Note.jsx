import React from "react";

function Note(props) {

    function viewNote(note) {
      props.showModal(true, "ViewNote", note.id);
    }

  return (
    <div>
      <div className="Note">
        <h3>{props.note.name}</h3>
        <button onClick={()=>viewNote(props.note)}>
          View
        </button>
      </div>
    </div>
  );
}

export default Note;
