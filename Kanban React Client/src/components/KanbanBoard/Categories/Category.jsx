import React, {useState} from 'react'
import Title from '../Title';
import Notes from '../Notes/Notes';
import NoteModals from '../../modals/NoteModals/NoteModals'
function Category (props) {

    const title = props.name;
    const customClassName = "categoryTitle";

    const [modalState, setModalState] = useState({
        isShow: false, 
        type:"ViewNote", 
        selectedId:1
    });


    // Set State
    function updateModalState(isShow, type, selectedId) {
        setModalState({
            isShow: isShow,
            type: type,
            selectedId: selectedId
        });
    }

    return (
        <div className="Category">
            <Title title={title} customClassName={customClassName}/>
            <button onClick={() => updateModalState(true, "CreateNote", 0)}>Add Note</button>
            <Notes notes={props.notes}
                showModal={updateModalState}
            />
            <NoteModals 
                modal={modalState}
                showModal={updateModalState}
                onHide={() => updateModalState(false, modalState.type, modalState.selectedId)}
                categoryId={props.id}
            />
        </div>
    )
}

export default Category;