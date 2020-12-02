import React, { useEffect, useState } from 'react';
import ViewNoteModal from './ViewNoteModal';
import EditNoteModal from './EditNoteModal';

import * as api from '../../../services/KanbanService';
import * as log from '../../../services/ErrorHandler';

function Modals(props) {
    

    // States
    const [note, setNote] = useState({id:0, name:"", description:"", color:{}})

    // Get note
    useEffect(() => {
        if (props.modal.selectedId > 0) {
            api.getNoteById(props.modal.selectedId).then(response=> {
                setNote(response.data);
            }).catch(error => log.logError(error)); 
        }
    });

    // TODO: Add Note

    // TODO: Delete Note

    // TODO: Update Note
    function updateNote(updatedNote){
        api.updateNote(updatedNote, props.categoryId, updatedNote.color.id).then(response=> {
            setNote(response.data);
        }).catch(error => log.logError(error)); 
    }


    // Select type of modal
    let selectedModal = null;

    switch(props.modal.type) {
        case "EditNote":
            selectedModal = 
                <EditNoteModal 
                    show={props.modal.isShow} 
                    showModal={props.showModal}
                    note={note}
                    onHide={props.onHide}
                    update={updateNote}
                    />
            break;
        case "ViewNote":
        default:
            selectedModal = 
                <ViewNoteModal 
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