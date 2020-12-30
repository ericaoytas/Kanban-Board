import React, { useEffect} from 'react';
import NoteModal from '../../components/Modal/NoteModal/NoteModal';
import NoteFormModal from '../../components/Modal/NoteModal/NoteFormModal';
import {ModalType} from '../../constants/CustomEnums';

function NoteModals(props) {
    
    const blankNote = { id:0, name:"",description:"",  color: {id:1} };

    // Read note
    useEffect(() => {
        if (props.modal.selectedId > 0 && props.modal.isOpen) {
            props.noteOperations.get(props.modal.selectedId);
        } 
        // eslint-disable-next-line
    },[props.modal.isOpen, props.modal.selectedId, props.noteOperations.get]);

    // Select type of modal
    let selectedModal = null;

    switch(props.modal.type) {
        case ModalType.CREATE:
            selectedModal = 
                <NoteFormModal 
                    title="Create New Note"
                    note={blankNote}
                    operations={props.noteOperations}
                    modal={props.modal}
                    updateModal={props.updateModal}
                    onHide={props.onHide}

                />
            break;
        case ModalType.UPDATE:
            selectedModal = 
                <NoteFormModal 
                    title="Edit Note"
                    note={props.note}
                    operations={props.noteOperations}
                    modal={props.modal}
                    updateModal={props.updateModal}
                    onHide={props.onHide}
                    />
            break;
        case ModalType.READ:
        default:
            selectedModal = 
                <NoteModal 
                    title="View Note"
                    note={props.note}
                    modal={props.modal}
                    updateModal={props.updateModal}
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

export default NoteModals;