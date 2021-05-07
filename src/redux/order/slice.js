import {createSlice} from '@reduxjs/toolkit';
import {getListOrder,getOrderById} from './action';

export const initialState = {
    listOrder:[],
    currentOrder:[],
    loading:true,
};
export const {reducer,actions}=createSlice ({
    name:'Order',
    initialState,
    reducer: {},
    extraReducers: {
        [getListOrder.fulfilled]: (state, {payload}) => {
            state.listOrder = payload.data;
            state.loading=false;
        },
        [getOrderById.fulfilled] : (state,{payload})=> {
            state.currentOrder=payload;
        }
    },
});
export default reducer