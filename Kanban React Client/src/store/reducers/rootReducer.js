import {boardReducer} from './board';
import {categoryReducer} from './category';
import {noteReducer} from './note';
import {colorReducer} from './color';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    boardReducer: boardReducer,
    categoryReducer: categoryReducer,
    noteReducer: noteReducer,
    colorReducer: colorReducer
});


export default rootReducer;