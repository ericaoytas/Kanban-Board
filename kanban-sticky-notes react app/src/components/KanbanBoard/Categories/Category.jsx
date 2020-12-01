import React from 'react'
import Title from '../Title';
import Notes from '../Notes/Notes';
function Category (props) {

    const title = props.name;
    const customClassName = "categoryTitle";

    return (
        <div className="Category">
            <Title title={title} customClassName={customClassName}/>
            <Notes notes={props.notes}
                showModal={props.showModal}
            />
        </div>
    )
}

export default Category;