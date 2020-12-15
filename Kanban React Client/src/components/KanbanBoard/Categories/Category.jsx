import React, {useState} from 'react'
import Notes from '../Notes/Notes';
import NoteModals from '../../modals/NoteModals/NoteModals'
function Category (props) {

    const [noteModal, setNoteModal] = useState({
        isShow: false, 
        type:"ViewNote", 
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
            <button onClick={() => updateNoteModal(true, "CreateNote", 0)}>Add Note</button>
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