import React from 'react';
import Category from './Category';

function Categories(props) {

    function createCategory(category) {
        
        return (
            <Category 
                key={category.id}
                name={category.name}
                notes={category.notes}
                showModal={props.showModal}
                />
        )
    }
    
    return (
        <div className="Categories">
            <div className="flex-container">
            { props.categories != null ? props.categories.map(createCategory) : null }
            </div>
        </div>
    ); 
}

export default Categories;