import React from 'react';
import Category from '../components/Category/Category';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';
import {ModalType} from '../constants/CustomEnums';
import CategoryModals from '../containers/Modals/CategoryModals';
import './containers.css';

function Categories(props) {

    const categoryOperations = {
        get: props.getCategory,
        create: (category) => props.createCategory(category, props.activeBoardId),
        update: (category) => props.updateCategory(category, props.activeBoardId),
        delete: props.deleteCategory
    }

    function createCategoryComponent(category) {
        return (
            <Category 
                key={category.id}
                id={category.id}
                name={category.name}
                notes={category.notes}
                updateModal={props.updateModal}
                modal={props.modal}
                />
        )
    }

    return (
        <div className="Categories">
            {props.categories != null ? props.categories.map(createCategoryComponent) : null}
            {/* <button onClick={() =>  updateCategoryModal(true, ModalType.CREATE, 0)}>Add New Category</button> */}
            <CategoryModals 
                category={props.category}
                categoryOperations={categoryOperations}
                modal={props.modal}
                updateModal={props.updateModal}
                onHide={() => props.updateModal(false, ModalType.CREATE, 0)}
                />
        </div>
    ); 
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        category: state.categoryReducer.selectedCategory,
        activeBoardId: state.boardReducer.activeBoardId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategory: (id) => dispatch(actionCreators.getCategoryById(id)),
        createCategory: (category, boardId) => dispatch(actionCreators.createCategory(category, boardId)),
        updateCategory: (category, boardId) => dispatch(actionCreators.updateCategory(category, boardId)),
        deleteCategory: (id) => dispatch(actionCreators.deleteCategory(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);