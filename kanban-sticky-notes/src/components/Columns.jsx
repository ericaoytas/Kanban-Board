import React from 'react';
import Column from './Column';
import NewColumn from './NewColumn';

function Columns() { 
    return (
        <div className="columns">
            <div className="flex-container">
                    <Column />
                    <NewColumn />
            </div>
        </div>
    );   
}

export default Columns;