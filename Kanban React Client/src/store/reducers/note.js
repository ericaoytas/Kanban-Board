import * as ActionType from '../actions/actionTypes';

const initialState = {
    selectedNote: {
        id: 0,
        name: "",
        description: "",
        color: {id: 0, name: ""}
    }
}

const updateObject = (prev, updatedValues) => {
    return {
        ...prev,
        ...updatedValues
    }
}

function noteReducer(state = initialState, action) {
    switch(action.type) {
        case ActionType.GET_NOTE: 
        case ActionType.CREATE_NOTE:
        case ActionType.UPDATE_NOTE:
            return updateObject(state, {selectedNote: action.note})
        default:
            return state;
    }
}


export {noteReducer};