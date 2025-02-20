import { combineReducers } from 'redux';
import mainReducer from './main/mainReducer';

const combinedReducer = combineReducers({
  main: mainReducer
});

export default combinedReducer;
