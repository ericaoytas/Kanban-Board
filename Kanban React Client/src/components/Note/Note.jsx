import React from "react";
import {ModalType} from '../../constants/CustomEnums';

function Note(props) {

  return (
    <div>
      <div className="Note">
        <h3>{props.note.name}</h3>
        <button onClick={()=>props.updateModal(true, ModalType.READ, props.note.id)}>
          View
        </button>
      </div>
    </div>
  );
}

export default Note;
