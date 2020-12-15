import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import BoardModals from '../../modals/BoardModals/BoardModals';
function Board(props) {
    
    const [boardModal, setBoardModal] = useState({
        isShow: false, 
        selectedId: 0
    });

    // Set State
    function updateBoardModal(isShow, id) {
        setBoardModal({
            isShow: isShow,
            selectedId: id
        });
    }

    function hideModal() {
        updateBoardModal(false, boardModal.selectedId);
        window.location.reload();
    }

    return (
        <div className="Board">
            {props.board != null ? <h2>{props.board.name}</h2>  : null}
            <button onClick={() => updateBoardModal(true, props.board.id)}>Edit Board</button>
            <Categories 
                boardId={props.board.id}
                categories={props.categories}
                />
            <BoardModals
                modal={boardModal}
                updateModal={updateBoardModal}
                onHide={hideModal}
                categoryId={props.id}
            />
        </div>
    );
}

export default Board;