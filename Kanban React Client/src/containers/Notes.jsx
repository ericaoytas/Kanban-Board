import React, {useState} from 'react';
import Note from '../components/Note/Note';
import NoteModals from './Modals/NoteModals';
import {connect} from 'react-redux';
import {ModalType} from '../constants/CustomEnums';
import * as actionCreators from '../store/actions/index';

function Notes(props) {


    const [noteModal, setNoteModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE, 
        selectedId: 0
    });

    function updateNoteModal(isOpen, type, selectedId) {
        setNoteModal({
            isOpen: isOpen,
            type: type,
            selectedId: selectedId
        });
    }

    const noteOperations = {
        get: props.getNote,
        create: (note) => props.addNote(note, props.categoryId),
        update: (note) => props.updateNote(note, props.categoryId),
        delete: props.deleteNote
    }

    function createNoteComponent(note) {
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
            {props.notes != null ? props.notes.map(createNoteComponent) : null}
            <NoteModals 
                modal={noteModal}
                note={props.note}
                noteOperations={noteOperations}
                updateModal={updateNoteModal}
                onHide={() => updateNoteModal(false, noteModal.type, noteModal.selectedId)}
                categoryId={props.categoryId}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        note: state.noteReducer.selectedNote,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNote: (id) => dispatch(actionCreators.getNote(id)),
        addNote: (note, categoryId) => {dispatch(actionCreators.createNote(note, categoryId))},
        updateNote: (note, categoryId) => dispatch(actionCreators.updateNote(note, categoryId)),
        deleteNote: (id) => dispatch(actionCreators.deleteNote(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);