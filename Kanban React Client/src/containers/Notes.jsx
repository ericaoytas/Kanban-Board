import React from 'react';
import Note from '../components/Note/Note';
import NoteModals from './Modals/NoteModals';
import {connect} from 'react-redux';
import {ModalType} from '../constants/CustomEnums';
import * as actionCreators from '../store/actions/index';
import './containers.css';

function Notes(props) {

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
                updateModal={props.updateModal}
            />);
    }

    return (
        <div className="Notes">
            {props.notes != null ? props.notes.map(createNoteComponent) : null}
            <NoteModals 
                modal={props.modal}
                note={props.note}
                noteOperations={noteOperations}
                updateModal={props.updateModal}
                onHide={() => props.updateModal(false, ModalType.CREATE, 0)}
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