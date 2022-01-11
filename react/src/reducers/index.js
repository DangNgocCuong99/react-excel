import { combineReducers } from 'redux';
import excelReducer from './excelReducer';
export default combineReducers({
    item:excelReducer
});