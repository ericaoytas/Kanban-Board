import React, {useState} from 'react';
import Notes from './Notes'


function Column(props) {


    return (

        <div className="column droppabledrag-container"
            onDragOver={props.onDragOver}
            onDrop={(e) => {props.onDrop(e, props.columnTitle)}}
            name={props.columnTitle}
            >
            <h2>{props.columnTitle}</h2>
            <Notes
                notesArray={props.notesArray}
                showModal={props.showModal}
            />
        </div>


    );
}

export default Column;