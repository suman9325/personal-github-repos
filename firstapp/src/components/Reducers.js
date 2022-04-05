
import { combineReducers } from 'redux'
import counterReducer from './ReducerComp1';
import messageReducer from './ReducerComp2';

export default combineReducers({
    counterReducer,
    messageReducer
})