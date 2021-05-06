import {createSlice} from '@reduxjs/toolkit';
import {getListOrder} from './action';

export const initialState = {
    listOrder:[],
};
export const {reducer,actions}=createSlice ({
    name:'Order',
    initialState,
    reducer: {},
    extraReducers: {
        [getListOrder.fulfilled]: (state, {payload}) => {
            state.listOrder = payload.data;
        },
    },
});
export default reducer