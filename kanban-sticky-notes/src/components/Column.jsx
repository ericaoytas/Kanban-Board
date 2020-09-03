import React, {useState} from 'react';
import Notes from './Notes'


function Column(props) {


    return (

        <div className="column droppabledrag-container"
            onDragOver={props.onDragOver}
            onDrop={(e) => {props.onDrop(e, props.columnTitle)}}
            name={props.columnTitle}
            >
            <h1>{props.columnTitle}</h1>
            <Notes
                notesArray={props.notesArray}
            />
        </div>


    );
}

export default Column;