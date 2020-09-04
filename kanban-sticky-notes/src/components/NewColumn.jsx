import React from 'react';

function NewColumn() {
    return (
        <div className="new-column">
            <h2 className="plus" onClick={() => console.log("Clicked!")}>+</h2>
            
        </div>
    ); 
}

export default NewColumn;

