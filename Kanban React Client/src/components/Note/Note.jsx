import React from "react";
import { ModalType } from '../../constants/CustomEnums';
import './Note.css';
function Note(props) {

  const style = {
    backgroundColor: "#" + props.note.color.hexValue
  }

  return (
    <div className="Note" style={style} onClick={() => props.updateModal(true, ModalType.READ, props.note.id)}>
      <h3 className="note-title" >{props.note.name}</h3>
    </div>
  );
}

export default Note;
