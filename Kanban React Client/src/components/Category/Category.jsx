import React from 'react'
import Notes from '../../containers/Notes';

function Category (props) {

    return (
        <div className="Category">
            <h2>{props.name}</h2>

            <Notes notes={props.notes}
                categoryId={props.id}
            />

        </div>
    )
}

export default Category;