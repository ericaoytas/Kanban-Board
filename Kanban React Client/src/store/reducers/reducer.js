import * as ActionType from '../actions/actionTypes';

const initialState = {
    boards: [{id: 0, name: ""}],
    selectedBoard: {
        id: 0,
        name: ""
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.GET_BOARDS: 
            return {
                ...state,
                boards: action.boards
            }
        case ActionType.GET_BOARD:
            return {
                ...state,
                selectedBoard: {
                    id: action.id,
                    name: action.name
                }
            }
        case ActionType.UPDATE_BOARD:
            return {
                ...state,
                selectedBoard: {
                    id: 0, 
                    name: ""
                }
            }
        default:
            return state;
    }
}