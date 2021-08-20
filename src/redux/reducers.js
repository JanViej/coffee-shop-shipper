import {combineReducers} from '@reduxjs/toolkit';
import staff from './staff/slice';
import order from './order/slice'

const rootReducer = combineReducers({
  staff,
  order,
});

export default rootReducer;
