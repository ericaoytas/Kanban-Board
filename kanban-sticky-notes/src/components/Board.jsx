import React from 'react';
import Columns from './Columns';
import noteData from '../noteData.jsx';



function Board() {
  return (
    <div className="board">
    <h1>Board Title</h1>
      <Columns 
        categories = {noteData.categories}
        notes = {noteData.notes}
      />
    </div>
  );
}

export default Board;
