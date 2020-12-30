import * as ActionType from '../actions/actionTypes';

const initialState = {
    categories: [{id: 0, name: ""}],
    selectedCategory: {
        id: 0,
        name: "",
        notes: [{id: 0}]
    }
}

const updateObject = (prev, updatedValues) => {
    return {
        ...prev,
        ...updatedValues
    }
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:
            return updateObject(state, {categories: action.categories});
        case ActionType.GET_CATEGORY:
            return updateObject(state, {selectedCategory: action.selectedCategory});
        default:
            return state;
    }  
}

export {categoryReducer}