import React from "react";

function Note(props) {
  function onDragStart(event) {
    event.dataTransfer.setData("id", props.id);
  }

  return (
    <div
      className="note-container draggable"
      draggable
      onDragStart={onDragStart}
    >
      <div className="note">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Note;
