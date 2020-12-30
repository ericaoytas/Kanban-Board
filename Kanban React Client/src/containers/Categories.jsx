import React, {useState} from 'react';
import Category from '../components/Category/Category';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';
import {ModalType} from '../constants/CustomEnums';
import CategoryModals from '../containers/Modals/CategoryModals';
function Categories(props) {


    // Category Modal
    const [categoryModal, setCategoryModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE,
        selectedId: 0
    });

    function updateCategoryModal(isOpen, type, id) {
        setCategoryModal({
            isOpen: isOpen,
            type: type,
            selectedId: id
        });
    }

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
                updateModal={updateCategoryModal}
                modal={categoryModal}
                />
        )
    }

    return (
        <div className="Categories">
            <div className="flex-container">
                {props.categories != null ? props.categories.map(createCategoryComponent) : null}
                <button onClick={() =>  updateCategoryModal(true, ModalType.CREATE, 0)}>Add New Category</button>
                <CategoryModals 
                    category={props.category}
                    categoryOperations={categoryOperations}
                    modal={categoryModal}
                    updateModal={updateCategoryModal}
                    onHide={() => updateCategoryModal(false, ModalType.CREATE, 0)}
                    />
            </div>
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