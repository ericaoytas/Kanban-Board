import React from 'react';

function Title(props){

    return (
        <div className={props.customClassName}>
            <p>{props.title}</p>
            <button>Edit</button>
        </div>
    )
}

export default Title;