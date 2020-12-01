import React from 'react';
import Note from './Note';

function Notes(props) {

    function createNote(note) {
        return (
            <Note 
                key={note.id}
                note={note}
                showModal={props.showModal}
            />);
    }
    return (
        <div className="Notes">
            {props.notes != null ? props.notes.map(createNote) : null}
        </div>
    );
}

export default Notes;