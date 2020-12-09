import React from 'react';
import Title from '../Title';
import Categories from '../Categories/Categories';

function Board(props) {
    
    return (
        <div className="Board">
            {props.board != null ? <Title title={props.board.name} customClassName="boardTitle"/>  : null}
           
            <Categories 
                categories={props.categories}
                />
        </div>
    );
}

export default Board;