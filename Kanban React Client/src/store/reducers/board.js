import * as ActionType from '../actions/actionTypes';

const initialState = {
    boards: [{id: 0, name: ""}],
    selectedBoard: {
        id: 0,
        name: ""
    },
    activeBoardId: 0
}

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_BOARDS: 
            return {
                ...state,
                boards: action.boards,
                activeBoardId: action.activeBoardId
            }
        case ActionType.GET_BOARD:
            return {
                ...state,
                selectedBoard: {
                    id: action.id,
                    name: action.name
                }
            }
        case ActionType.SET_ACTIVE_BOARD_ID:
            return {
                ...state,
                activeBoardId: action.id
            }
        default:
            return state;
    }
}