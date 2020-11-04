import React from 'react';
import Column from './Column';


function Columns(props) { 

    function createColumn(notes, index) {
        return function(column) {
            let notesInCategory = getNotesInCategory(column.id, notes);

            return (<Column 
                key={index}
                column = {column}
                notesArray = {notesInCategory}
                onDragOver = {props.onDragOver}
                onDrop = {props.onDrop}
                showModal ={props.showModal}
            />);
        }
    }

    function getNotesInCategory(categoryId, inNotes) {
        return inNotes.filter((note) => {
          return note.category_id === categoryId;
        });
      }
    

    return (
        <div className="columns">
            <div className="flex-container">
                    {props.categories.map(createColumn(props.notes))}
            </div>
        </div>
    );   
}

export default Columns;