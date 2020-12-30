import * as api from '../../services/KanbanService';
import * as ActionType from './actionTypes';
import * as log from '../../utils/ErrorHandler';

function getBoards() {
    return (dispatch, getState) => {
        api.getBoards().then(response => {
            let activeBoardId = getState().boardReducer.activeBoardId;
            if (activeBoardId === 0) {
                activeBoardId = response.data[0].id;
            }
            dispatch({
                type: ActionType.GET_BOARDS, 
                boards: response.data, 
                activeBoardId: activeBoardId
            })
        }).catch(error => log.logError(error));
    }
}

function getBoard (id) {
    return dispatch => {
        api.getBoardById(id).then(response => {
            dispatch({
                    type: ActionType.GET_BOARD,
                    id: response.data.id,
                    name: response.data.name
                });
        }).catch(error => log.logError(error));
    }
}

function updateBoard(board) {
    return dispatch => {
        api.updateBoard(board).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}

function deleteBoard(id) {
    return dispatch => {
        api.deleteBoard(id).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}

function createBoard(board) {
    return dispatch => {
        api.createBoard(board).then(response => {
            dispatch(getBoards());
        }).catch(error => log.logError(error));
    }
}

export {
    getBoards,
    getBoard,
    createBoard,
    updateBoard,
    deleteBoard
};