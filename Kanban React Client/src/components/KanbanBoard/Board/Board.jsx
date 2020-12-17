import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import {ModalType} from '../../../constants/CustomEnums';
function Board(props) {
    


    return (
        <div className="Board">
            {props.board != null ? <h2>{props.board.name}</h2>  : null}
            <button onClick={() => props.updateModal(true, ModalType.UPDATE, props.board.id)}>Edit Board</button>
            <Categories 
                boardId={props.board.id}
                categories={props.categories}
                />

        </div>
    );
}

export default Board;