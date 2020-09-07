import React from "react";

function Note(props) {
  function onDragStart(event) {
    event.dataTransfer.setData("id", props.noteInfo.noteId);
  }
  function handleDoubleClick(event) {
    props.showModal(event, "view", props.noteInfo, true);
  }

  return (
    <div
      className="note-container draggable"
      draggable
      onDragStart={onDragStart}
      onDoubleClick={handleDoubleClick}
    >
      <div className="note">
        <h3>{props.noteInfo.title}</h3>
        <p>{props.noteInfo.description.substr(0, 40)}</p>
      </div>
    </div>
  );
}

export default Note;
