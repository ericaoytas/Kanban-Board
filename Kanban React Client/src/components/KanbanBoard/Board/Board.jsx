import React from 'react';
import Title from '../Title';
import Categories from '../Categories/Categories';

function Board(props) {
    const title = props.board.name;
    const customClassName = "boardTitle";
    
    return (
        <div className="Board">
            <Title title={title} customClassName={customClassName}/> 
            <Categories 
                categories={props.board.categories}
                showModal={props.showModal}
                />
        </div>
    );
}

export default Board;