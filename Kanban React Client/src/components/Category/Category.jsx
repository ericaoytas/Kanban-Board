import React, {useState} from 'react'
import Notes from '../../containers/Notes';
import {ModalType} from '../../constants/CustomEnums';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Category.css';
function Category (props) {

    // Note Modal
    const [noteModal, setNoteModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE, 
        selectedId: 0
    });

    function updateNoteModal(isOpen, type, selectedId) {
        setNoteModal({
            isOpen: isOpen,
            type: type,
            selectedId: selectedId
        });
    }


    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                margin: "5px 0px 7px 0px"
            }}
        />
    );

    return (
        <div className="Category">
            <div className="category-title">
            <h2>{props.name} </h2> 
            <FontAwesomeIcon icon={faPen} className="category-pen-icon" size="1.5x" onClick={() => props.updateModal(true, ModalType.UPDATE, props.id)}/>
            <FontAwesomeIcon icon={faPlus} className="category-plus-icon" size="1.5x" onClick={() => updateNoteModal(true, ModalType.CREATE, 0)}/>

            </div>
            <ColoredLine color="white" />
            <Notes notes={props.notes}
                categoryId={props.id}
                modal={noteModal}
                updateModal={updateNoteModal}
            />

        </div>
    )
}

export default Category;