import React from "react";
import {ModalType} from '../../constants/CustomEnums';

function Note(props) {

    function viewNote(note) {
      props.updateModal(true, ModalType.READ, note.id);
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
