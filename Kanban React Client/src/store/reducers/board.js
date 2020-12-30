import * as ActionType from '../actions/actionTypes';

const initialState = {
    boards: [{id: 0, name: ""}],
    selectedBoard: {
        id: 0,
        name: ""
    },
    activeBoardId: 0
}

const updateObject = (prev, updatedValues) => {
    return {
        ...prev,
        ...updatedValues
    }
}

function boardReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.GET_BOARDS: 
            return updateObject(state, {boards: action.boards, activeBoardId: action.activeBoardId});
        case ActionType.GET_BOARD:
            return updateObject(state, { selectedBoard: {id: action.id, name: action.name}});
        case ActionType.SET_ACTIVE_BOARD_ID:
            return updateObject(state, {activeBoardId:action.id});
        default:
            return state;
    }
}

export {boardReducer}