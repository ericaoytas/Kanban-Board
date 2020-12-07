/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import ViewNoteModal from './ViewNoteModal';
import EditNoteModal from './EditNoteModal';

import * as api from '../../../services/KanbanService';
import * as log from '../../../services/ErrorHandler';

function Modals(props) {
    
    const blankNote = { id:0, name:"",description:"",  color: {id:1} };
    
    // States
    const [note, setNote] = useState(blankNote);
 

    // Read note
    useEffect(() => {
        if (props.modal.selectedId > 0 && props.modal.isShow) {
            api.getNoteById(props.modal.selectedId).then(response=> {
                setNote(response.data);
            }).catch(error => log.logError(error)); 
        } else {
            setNote(blankNote);
        }
    },[props.modal, blankNote]);

    // Create note
    function addNote(newNote) {
        api.addNote(newNote, props.categoryId, newNote.color.id).then(response=>{
            setNote(response.data);
        }).catch(error => log.logError(error));
    }

    // Update note
    function updateNote(updatedNote){
        api.updateNote(updatedNote, props.categoryId, updatedNote.color.id).then(response=> {
            setNote(response.data);
        }).catch(error => log.logError(error)); 
    }

    // Delete note
    function deleteNote(noteId){
        api.deleteNote(noteId).then(response => {
            console.log(response.data);
        }).catch(error => log.logError(error));
    }

    // Select type of modal
    let selectedModal = null;

    switch(props.modal.type) {
        case "CreateNote":
            selectedModal = 
                <EditNoteModal 
                    title="Create New Note"
                    show={props.modal.isShow} 
                    showModal={props.showModal}
                    note={note}
                    onHide={props.onHide}
                    create={addNote}
                    update={updateNote}
                    delete={deleteNote}
                    type={props.modal.type}
                />
            break;
        case "EditNote":
            selectedModal = 
                <EditNoteModal 
                    title="Edit Note"
                    show={props.modal.isShow} 
                    showModal={props.showModal}
                    note={note}
                    onHide={props.onHide}
                    create={addNote}
                    update={updateNote}
                    delete={deleteNote}
                    type={props.modal.type}
                    />
            break;
        case "ViewNote":
        default:
            selectedModal = 
                <ViewNoteModal 
                    title="View Note"
                    show={props.modal.isShow} 
                    showModal={props.showModal}
                    note={note}
                    onHide={props.onHide}
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

export default Modals;