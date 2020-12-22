import * as api from '../../services/KanbanService';
import * as actionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';

export const getBoards = () => {
    return dispatch => {
        api.getBoards().then(response => {
            dispatch({type: actionType.GET_BOARDS, boards: response.data})
        })
    }
}


export const getBoard = (id) => {
    return dispatch => {
        api.getBoardById(id).then(response => {
            dispatch({
                    type: actionType.GET_BOARD,
                    id: response.data.id,
                    name: response.data.name
                });
        }).catch(error => log.logError(error));
    }
}

export const updateBoard = (board) => {
    return dispatch => {
        api.updateBoard(board).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}

export const deleteBoard = (id) => {
    return dispatch => {
        api.deleteBoard(id).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}

export const createBoard = (board) => {
    return dispatch => {
        api.createBoard(board).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}
