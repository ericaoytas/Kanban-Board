import React, {useState} from 'react';
import Column from './Column';
import NewColumn from './NewColumn';


function Columns(props) { 
    
    const [notesArray, setNotes] = useState(props.notes);

    function createColumn(notes) {
        return function(column) {
            let notesInCategory = getNotesInCategory(column.name, notes);

            return (<Column 
                columnTitle = {column.name}
                notesArray = {notesInCategory}
                onDragOver = {onDragOver}
                onDrop = {onDrop}
            />);
        }
    }

    function getNotesInCategory(category, notes) {
        return notes.filter( (note) => {
            return note.category === category;
        });
    }

    
    function onDragOver(event) {
        event.preventDefault();
    }
    
    function onDrop(event, category) {
        let id = event.dataTransfer.getData("id");
        const updatedNote = notesArray.find(note => {
            return note.noteId === id;
        })
        updatedNote.category = category;
        setNotes(prevState => {
            return [
                ... prevState,
                {
                    ... updatedNote
                }
            ]
        })
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