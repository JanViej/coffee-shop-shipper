import {createSlice} from '@reduxjs/toolkit';
import {getListOrder,getOrderById} from './action';

export const initialState = {
    listOrder:[],
    currentOrder:[],
    loadingOrders:true,
    loadingDetails:true
};
export const {reducer,actions}=createSlice ({
    name:'Order',
    initialState,
    reducer: {},
    extraReducers: {
        [getListOrder.fulfilled]: (state, {payload}) => {
            state.listOrder = payload.data;
            state.loadingOrders=false;
        },
        [getOrderById.fulfilled] : (state,{payload})=> {
            state.currentOrder=payload.data.order;
            state.loadingDetails=false;
        }
    },
});
export default reducer