import React from 'react';
import Columns from './Columns';
import noteData from '../noteData.jsx';



function Board() {
  return (
    <div className="board">
      <Columns 
        categories = {noteData.categories}
        notes = {noteData.notes}
      />
    </div>
  );
}

export default Board;
