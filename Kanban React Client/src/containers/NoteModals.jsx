/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import ViewNoteModal from '../components/Modal/NoteModal/NoteModal';
import EditNoteModal from '../components/Modal/NoteModal/NoteFormModal';

import * as api from '../services/KanbanService';
import * as log from '../utils/ErrorHandler';
import {ModalType} from '../constants/CustomEnums';

function NoteModals(props) {
    
    const {modal, categoryId, fetchCategories, ...rest} = props;

    const blankNote = { id:0, name:"",description:"",  color: {id:1} };
    
    // States
    const [note, setNote] = useState(blankNote);
 
    // Read note
    useEffect(() => {
        if (modal.selectedId > 0 && modal.isShow) {
            api.getNoteById(modal.selectedId).then(response=> {
                setNote(response.data);
            }).catch(error => log.logError(error)); 
        } 
        return () => fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchCategories, modal.isShow, modal.selectedId]);

    // Create note
    function addNote(newNote) {
        api.createNote(newNote, categoryId, newNote.color.id).then(response=>{
            setNote(response.data);
        }).catch(error => log.logError(error));
    }

    // Update note
    function updateNote(updatedNote){
        api.updateNote(updatedNote, categoryId, updatedNote.color.id).then(response=> {
            setNote(response.data);
        }).catch(error => log.logError(error)); 
    }

    // Delete note
    function deleteNote(noteId){
        api.deleteNote(noteId).then(response => {
            console.log(response.data);
        }).catch(error => log.logError(error));
        fetchCategories();
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
                <EditNoteModal 
                    title="Create New Note"
                    note={blankNote}
                    operations={operations}
                    modal={modal}
                    {...rest}
                />
            break;
        case ModalType.UPDATE:
            selectedModal = 
                <EditNoteModal 
                    title="Edit Note"
                    note={note}
                    operations={operations}
                    modal={modal}
                    {...rest}
                    />
            break;
        case ModalType.READ:
        default:
            selectedModal = 
                <ViewNoteModal 
                    title="View Note"
                    note={note}
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

export default NoteModals;