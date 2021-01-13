import React, {useState} from 'react';
import Categories from '../../containers/Categories';
import {ModalType} from '../../constants/CustomEnums';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Board.css';

function Board(props) {

    // Category Modal
    const [categoryModal, setCategoryModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE,
        selectedId: 0
    });

    function updateCategoryModal(isOpen, type, id) {
        setCategoryModal({
            isOpen: isOpen,
            type: type,
            selectedId: id
        });
    }

    return (
        <div className="Board">
            {props.board != null ? <h2 className="board-title">{props.board.name}</h2>  : null}
            <FontAwesomeIcon icon={faPen} className="board-pen-icon" size="2x" onClick={() => props.updateModal(true, ModalType.UPDATE, props.board.id)}/>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" size="2x" onClick={() =>  updateCategoryModal(true, ModalType.CREATE, 0)}/>
            <Categories boardId={props.board.id} modal={categoryModal} updateModal={updateCategoryModal} />
        </div>
    );
}

export default Board;