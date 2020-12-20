import React, {useState} from 'react'
import Notes from '../../containers/Notes';
import NoteModals from '../../containers/NoteModals';
import {ModalType} from '../../constants/CustomEnums';
function Category (props) {

    const [noteModal, setNoteModal] = useState({
        isShow: false, 
        type:ModalType.CREATE, 
        selectedId:1
    });

    // Set State
    function updateNoteModal(isShow, type, selectedId) {
        setNoteModal({
            isShow: isShow,
            type: type,
            selectedId: selectedId
        });
    }

    return (
        <div className="Category">
            <h2>{props.name}</h2>
            <button onClick={() => updateNoteModal(true, ModalType.CREATE, 0)}>Add Note</button>
            <Notes notes={props.notes}
                updateModal={updateNoteModal}
            />
            <NoteModals 
                modal={noteModal}
                updateModal={updateNoteModal}
                onHide={() => updateNoteModal(false, noteModal.type, noteModal.selectedId)}
                categoryId={props.id}
                fetchCategories={props.fetchCategories}
            />
        </div>
    )
}

export default Category;