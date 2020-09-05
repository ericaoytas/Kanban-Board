import React from 'react';
import Note from './Note';


function Notes(props) {

    function createNote(noteInfo) {
        return (<Note 
            key={noteInfo.noteId}
            id={noteInfo.noteId}
            title={noteInfo.title}
            description={noteInfo.description}
            showModal={props.showModal}
        />);
    }
    return (
        <div className="notes">
            {props.notesArray.map(createNote)}
        </div>
    );
}

export default Notes;