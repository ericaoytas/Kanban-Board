import React from "react";

function Note(props) {
  function onDragStart(event) {
    event.dataTransfer.setData("id", props.noteInfo.id);
  }
  function handleDoubleClick(event) {
    props.showModal("note", true, "view", "View Note", props.noteInfo);
  }

  return (
    <div
      name="note"
      className="note-container draggable"
      draggable
      onDragStart={onDragStart}
      onDoubleClick={handleDoubleClick}
    >
      <div className="note">
        <h3>{props.noteInfo.title}</h3>
        <p>{props.noteInfo.description}</p>
      </div>
    </div>
  );
}

export default Note;
