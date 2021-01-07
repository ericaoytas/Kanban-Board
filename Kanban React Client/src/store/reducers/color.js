import * as ActionType from '../actions/actionTypes';

const initialState = {
    colors: [{id: 0, name: "", hexValue: ""}],
    selectedColor: {
        id: 0,
        name: "",
        hexValue: ""
    }
}


const updateObject = (prev, updatedValues) => {
    return {
        ...prev,
        ...updatedValues
    }
}

function colorReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.GET_COLORS:
            return updateObject(state, {colors: action.colors});
        case ActionType.GET_COLOR:
            return updateObject(state, {selectedColor: action.selectedColor});
        default:
            return state;
    }  
}

export {colorReducer};