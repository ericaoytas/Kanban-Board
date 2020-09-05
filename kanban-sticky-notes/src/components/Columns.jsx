import React, {useState} from 'react';
import Column from './Column';
import NewColumn from './NewColumn';


function Columns(props) { 
    
    const [notesArray, setNotes] = useState(props.notes);

    function createColumn(notes, index) {
        return function(column) {
            let notesInCategory = getNotesInCategory(column.name, notes);

            return (<Column 
                key={index}
                columnTitle = {column.name}
                notesArray = {notesInCategory}
                onDragOver = {props.onDragOver}
                onDrop = {props.onDrop}
                showModal ={props.showModal}
            />);
        }
    }

    function getNotesInCategory(category, inNotes) {
        return inNotes.filter((note) => {
          return note.category === category;
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