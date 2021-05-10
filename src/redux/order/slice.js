import {createSlice} from '@reduxjs/toolkit';
import { update } from 'lodash';
import {getListOrder,getOrderById,updateStatus} from './action';

export const initialState = {
    data:[],
    listOrder:[],
    currentOrder:[],
    currentOrderDetails:[],
    loadingOrders:true,
    loadingDetails:true,
    updateSuccess:false,
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
        [getOrderById.fulfilled] : (state,{payload})=> {
            state.currentOrder=payload.data.order;
            state.loadingDetails=false;
        },
        [updateStatus.fulfilled]: (state, {payload}) => {
            state.data = payload.data.data;
            updateSuccess=true;
          },
    },
});
export default reducer