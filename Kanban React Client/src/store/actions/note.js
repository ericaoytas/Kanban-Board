import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';
import * as categoryActionCreator from './category';


function getNote(id) {
    return dispatch => {
        api.getNoteById(id).then(response => {
            dispatch({
                type: ActionType.GET_NOTE, 
                note: response.data
            })
        }).catch(error => log.logError(error));
    }
}

function createNote (note, categoryId) {
    return (dispatch, getState) => {
        
        // TODO: default color
        const color = 1;

        api.createNote(note, categoryId, color).then(response => {
            dispatch({
                type: ActionType.CREATE_NOTE,
                note: response.data
            });
            dispatch(categoryActionCreator.getCategories(getState().boardReducer.activeBoardId));
        }).catch(error => log.logError(error));

        
    }
}

function updateNote(note, categoryId) {
    return (dispatch, getState) => {
        api.updateNote(note, categoryId, note.color.id).then(response => {
            dispatch({
                type: ActionType.UPDATE_NOTE,
                note: response.data
            });
            dispatch(categoryActionCreator.getCategories(getState().boardReducer.activeBoardId));
        }).catch(error => log.logError(error));
        
    }
}

function deleteNote(id) {
    return (dispatch, getState) => {
        api.deleteNote(id).then(response => {
            dispatch(categoryActionCreator.getCategories(getState().boardReducer.activeBoardId));
        }).catch(error => log.logError(error));
    }
}

export {
    getNote,
    createNote,
    updateNote,
    deleteNote,
};