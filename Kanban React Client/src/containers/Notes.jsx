import React, {useState} from 'react';
import Note from '../components/Note/Note';
import NoteModals from './Modals/NoteModals';

import {ModalType} from '../constants/CustomEnums';
function Notes(props) {


    const [noteModal, setNoteModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE, 
        selectedId: 0
    });

    // Set State
    function updateNoteModal(isOpen, type, selectedId) {
        setNoteModal({
            isOpen: isOpen,
            type: type,
            selectedId: selectedId
        });
    }

    function createNote(note) {
        return (
            <Note 
                key={note.id}
                note={note}
                updateModal={updateNoteModal}
            />);
    }
    return (
        <div className="Notes">
            <button onClick={() => updateNoteModal(true, ModalType.CREATE, 0)}>Add Note</button>
            {props.notes != null ? props.notes.map(createNote) : null}
            <NoteModals 
                modal={noteModal}
                updateModal={updateNoteModal}
                onHide={() => updateNoteModal(false, noteModal.type, noteModal.selectedId)}
                categoryId={props.categoryId}
            />
        </div>
    );
}

export default Notes;