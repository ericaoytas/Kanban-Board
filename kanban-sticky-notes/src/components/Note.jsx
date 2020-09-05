import React from "react";

function Note(props) {
  function onDragStart(event) {
    event.dataTransfer.setData("id", props.id);
  }
  function handleDoubleClick(event) {
    props.showModal(event, "view", props.id, true);
  }

  return (
    <div
      className="note-container draggable"
      draggable
      onDragStart={onDragStart}
      onDoubleClick={handleDoubleClick}
    >
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.description.substr(0, 40)}</p>
      </div>
    </div>
  );
}

export default Note;
