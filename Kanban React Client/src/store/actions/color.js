import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';

function getColors() {
    return dispatch => {
        api.getColors().then(response => {
            dispatch({
                type: ActionType.GET_COLORS,
                colors: response.data
            });
        }).catch(error => log.logError(error));
    }
}

function getColor(id) {
    return dispatch => {
        api.getColorById(id).then(response => {
            dispatch({
                type: ActionType.GET_COLOR,
                selectedColor: response.data
            })
        }).catch(error => log.logError(error));
    }
}

export {
    getColors,
    getColor
}
