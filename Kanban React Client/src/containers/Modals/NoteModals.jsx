/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import NoteModal from '../../components/Modal/NoteModal/NoteModal';
import NoteFormModal from '../../components/Modal/NoteModal/NoteFormModal';

import * as api from '../../services/KanbanService';
import * as log from '../../utils/ErrorHandler';
import {ModalType} from '../../constants/CustomEnums';

function NoteModals(props) {
    
    const {modal, categoryId, fetchCategories, ...rest} = props;

    const blankNote = { id:0, name:"",description:"",  color: {id:1} };
    
    // States
    const [note, setNote] = useState(blankNote);
 
    // Read note
    useEffect(() => {
        if (modal.selectedId > 0 && modal.isOpen) {
            api.getNoteById(modal.selectedId).then(response=> {
                setNote(response.data);
            }).catch(error => log.logError(error)); 
        } 
        return () => fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchCategories, modal.isOpen, modal.selectedId]);

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
                <NoteFormModal 
                    title="Create New Note"
                    note={blankNote}
                    operations={operations}
                    modal={modal}
                    {...rest}
                />
            break;
        case ModalType.UPDATE:
            selectedModal = 
                <NoteFormModal 
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
                <NoteModal 
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