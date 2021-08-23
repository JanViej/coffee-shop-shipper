import {createSlice} from '@reduxjs/toolkit';
import { update } from 'lodash';
import {getListOrder,getListOrderDelivery,getListOrderSuccess,getOrderById,updateStatus} from './action';

export const initialState = {
    data:[],
    listOrder:[],
    listOrderSuccess:[],
    listOrderDelivery:[],
    currentOrder:[],
    currentOrderDetails:[],
    loadingOrders:true,
    loadingDetails:true,
};
export const {reducer,actions}=createSlice ({
    name:'Order',
    initialState,
    reducer: {
    },
    extraReducers: {
        [getListOrder.fulfilled]: (state, {payload}) => {
            state.listOrder = payload.data;
            state.loadingOrders=false;
        },
        [getListOrderSuccess.fulfilled]: (state, {payload}) => {
            state.listOrderSuccess = payload.data;
        },
        [getListOrderDelivery.fulfilled]: (state, {payload}) => {
            state.listOrderDelivery = payload.data;
        },
        [getOrderById.fulfilled] : (state,{payload})=> {
            state.currentOrder=payload.data.order;
            state.loadingDetails=false;
        },
    },
});
export default reducer