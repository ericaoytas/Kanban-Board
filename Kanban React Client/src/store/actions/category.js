import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';

export const getCategories = (boardId) => {
    return dispatch => {
        api.getCategoriesByBoardId(boardId).then(response => {
            dispatch({
                type: ActionType.GET_CATEGORIES,
                categories: response.data,
            })
        }).catch(error => log.logError(error));
    }
}
