import React from 'react';

function NewColumn() {
    return (
        <div className="new-column">
            <p className="plus" onClick={() => console.log("Clicked!")}>+</p>
        </div>
    ); 
}

export default NewColumn;

