import {combineReducers} from '@reduxjs/toolkit';
import drink from './drink/slice';
import staff from './staff/slice';
import order from './order/slice'

const rootReducer = combineReducers({
  drink,
  staff,
  order,
});

export default rootReducer;
