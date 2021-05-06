import {combineReducers} from '@reduxjs/toolkit';
import drink from './drink/slice';
import staff from './staff/slice';

const rootReducer = combineReducers({
  drink,
  staff,
});

export default rootReducer;
