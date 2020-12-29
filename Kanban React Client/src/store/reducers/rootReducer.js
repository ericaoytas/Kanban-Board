import {boardReducer} from './board';
import {categoryReducer} from './category';
import {noteReducer} from './note';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    boardReducer: boardReducer,
    categoryReducer: categoryReducer,
    noteReducer: noteReducer
});


export default rootReducer;