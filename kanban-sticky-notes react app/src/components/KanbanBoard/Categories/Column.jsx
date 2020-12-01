import React from 'react';
import Notes from '../../Notes'


function Column(props) {

    function handleClick(event) {
        props.showModal("category", true, "edit", "Edit Column", props.column);
      }

    return (

        <div className="column droppabledrag-container"
            onDragOver={props.onDragOver}
            onDrop={(e) => {props.onDrop(e, props.column.name)}}
            name={props.columnTitle}
            >
            <h2 class="column-title" onClick={handleClick}>{props.column.name}</h2>
            <Notes
                notesArray={props.notesArray}
                showModal={props.showModal}
            />
        </div>


    );
}

export default Column;