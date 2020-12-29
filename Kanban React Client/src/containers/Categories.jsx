import React from 'react';
import Category from '../components/Category/Category';
import {connect} from 'react-redux';

function Categories(props) {

    function createCategory(category) {
        return (
            <Category 
                key={category.id}
                id={category.id}
                name={category.name}
                notes={category.notes}
                updateNameModal={props.updateNameModal}
                titleModal={props.titleModal}
                />
        )
    }

    const categoriesToRender = props.categories != null ? props.categories.map(createCategory) : null;
    
    return (
        <div className="Categories">
            <div className="flex-container">
                {categoriesToRender}
            </div>
        </div>
    ); 
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        activeBoardId: state.boardReducer.activeBoardId
    }
}

export default connect(mapStateToProps)(Categories);