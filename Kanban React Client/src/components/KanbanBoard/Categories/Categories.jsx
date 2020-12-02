import React, {useState} from 'react';
import Category from './Category';

function Categories(props) {


    function createCategory(category) {
        
        return (
            <Category 
                key={category.id}
                id={category.id}
                name={category.name}
                notes={category.notes}
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