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
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Note;
