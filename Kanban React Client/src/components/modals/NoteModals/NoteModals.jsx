import React, { useEffect, useState } from 'react';
import ViewNoteModal from './ViewNoteModal';
import EditNoteModal from './EditNoteModal';

import * as api from '../../../services/KanbanService';

function Modals(props) {
    let selectedModal = null;

    // States
    const [note, setNote] = useState({id:0, name:"", description:"", color:{}})

    useEffect(() => {
            api.getNoteById(props.modal.selectedId).then(response=> {
                setNote(response.data);
            }).catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });  
    });

    // Select type of modal
    switch(props.modal.type) {
        case "EditNote":
            selectedModal = 
                <EditNoteModal 
                    show={props.modal.isShow} 
                    showModal={props.showModal}
                    note={note}
                    onHide={props.onHide}
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