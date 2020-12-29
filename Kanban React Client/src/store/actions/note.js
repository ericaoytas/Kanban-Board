import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';
import * as categoryActionCreator from './category';


export const getNote = (id) => {
    return dispatch => {
        api.getNoteById(id).then(response => {
            dispatch({
                type: ActionType.GET_NOTE, 
                note: response.data
            })
        }).catch(error => log.logError(error));
    }
}

export const createNote = (note, categoryId) => {
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

export const updateNote = (note, categoryId) => {
    return (dispatch, getState) => {
        api.updateNote(note, categoryId, note.color.id).then(response => {
            dispatch({
                type: ActionType.CREATE_NOTE,
                note: response.data
            });
            dispatch(categoryActionCreator.getCategories(getState().boardReducer.activeBoardId));
        }).catch(error => log.logError(error));
        
    }
}

export const deleteNote = (id) => {
    return (dispatch, getState) => {
        api.deleteNote(id).then(response => {
            dispatch(categoryActionCreator.getCategories(getState().boardReducer.activeBoardId));
        }).catch(error => log.logError(error));
    }
}

