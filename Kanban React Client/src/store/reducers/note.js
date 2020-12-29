import * as ActionType from '../actions/actionTypes';

const initialState = {
    selectedNote: {
        id: 0,
        name: "",
        description: "",
        color: {id: 0, name: ""}
    }
}

function noteReducer(state = initialState, action) {
    switch(action.type) {
        case ActionType.GET_NOTE: 
            return {
                ...state, 
                selectedNote: action.note
            }
        case ActionType.CREATE_NOTE:
            return {
                ...state, 
                selectedNote: action.note
            }
        case ActionType.UPDATE_NOTE:
            return {
                ...state,
                selectedNote: action.note
            }
        default:
            return state;
    }
}


export {noteReducer};