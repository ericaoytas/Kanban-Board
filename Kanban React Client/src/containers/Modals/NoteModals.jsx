import React, { useEffect} from 'react';
import NoteModal from '../../components/Modal/NoteModal/NoteModal';
import NoteFormModal from '../../components/Modal/NoteModal/NoteFormModal';
import {connect} from 'react-redux';
import {ModalType} from '../../constants/CustomEnums';
import * as actionCreators from '../../store/actions/index';

function NoteModals(props) {
    
    const {modal, categoryId,  ...rest} = props;
    const blankNote = { id:0, name:"",description:"",  color: {id:1} };

    // Read note
    useEffect(() => {
        if (modal.selectedId > 0 && modal.isOpen) {
            props.getNote(modal.selectedId);
        } 
        // eslint-disable-next-line
    },[modal.isOpen, modal.selectedId, props.getNote]);


    // Create note
    function addNote(newNote) {
        props.addNote(newNote, categoryId);
    }

    // Update note
    function updateNote(updatedNote){
        props.updateNote(updatedNote, categoryId);
    }

    // Delete note
    function deleteNote(noteId){
        props.deleteNote(noteId)
    }

    // Crud Operations
    const operations = {
        create: addNote,
        update: updateNote,
        delete: deleteNote,
    }

    // Select type of modal
    let selectedModal = null;

    switch(props.modal.type) {
        case ModalType.CREATE:
            selectedModal = 
                <NoteFormModal 
                    title="Create New Note"
                    note={blankNote}
                    operations={operations}
                    modal={modal}
                    updateModal={props.updateModal}
                    onHide={props.onHide}

                />
            break;
        case ModalType.UPDATE:
            selectedModal = 
                <NoteFormModal 
                    title="Edit Note"
                    note={props.note}
                    operations={operations}
                    modal={modal}
                    {...rest}
                    />
            break;
        case ModalType.READ:
        default:
            selectedModal = 
                <NoteModal 
                    title="View Note"
                    note={props.note}
                    modal={modal}
                    {...rest}
                    />
            break;
    }

    // Render
    return (
        <div className="Modals">
            {selectedModal}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        note: state.noteReducer.selectedNote,
        activeBoardId: state.boardReducer.activeBoardId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNote: (id) => dispatch(actionCreators.getNote(id)),
        addNote: (note, categoryId) => dispatch(actionCreators.createNote(note, categoryId)),
        updateNote: (note, categoryId) => dispatch(actionCreators.updateNote(note, categoryId)),
        deleteNote: (id) => dispatch(actionCreators.deleteNote(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModals);