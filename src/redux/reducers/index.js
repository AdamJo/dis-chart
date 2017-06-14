// src/reducers/index.js
import chart from './chart';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  chart,
});
export default rootReducer;
