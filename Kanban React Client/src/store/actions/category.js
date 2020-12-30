import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';

function getCategories(boardId) {
    return dispatch => {
        api.getCategoriesByBoardId(boardId).then(response => {
            dispatch({
                type: ActionType.GET_CATEGORIES,
                categories: response.data,
            })
        }).catch(error => log.logError(error));
    }
}

function getCategoryById(id) {
    return dispatch => {
        api.getCategoryById(id).then(response => {
            dispatch({
                type: ActionType.GET_CATEGORY,
                selectedCategory: response.data
            });
        })
    }
}

function createCategory(category, boardId) {
    return dispatch => {
        api.createCategory(category, boardId).then(response => {
            dispatch(getCategories(boardId));
        });
    }
}

function updateCategory(category, boardId) {
    return dispatch => {
        api.updateCategory(category, boardId).then(response => {
            dispatch(getCategories(boardId));
        });
    }
}

function deleteCategory(id) {
    return (dispatch, getState) => {
        api.deleteCategory(id).then(response => {
            dispatch(getCategories(getState().boardReducer.activeBoardId));
        })
    }
}

export {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};