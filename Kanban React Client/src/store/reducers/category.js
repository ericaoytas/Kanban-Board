import * as ActionType from '../actions/actionTypes';

const initialState = {
    categories: [{id: 0, name: ""}],
    selectedCategory: {
        id: 0,
        name: "",
        notes: [{id: 0}]
    }
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
    }  
}