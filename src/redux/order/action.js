import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiWrapper } from '../../utils/redux'

import { getListOrderApi, getOrderByIdApi } from '../../api/order'

export const getListOrder = createAsyncThunk(
    'order/getListOrder',
    async (payload, thunkAPI) => {
        try {
            const token = thunkAPI.getState().staff.token;
            const { data } = await apiWrapper({}, getListOrderApi, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            console.log('token shipper', token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);

export const getOrderById = createAsyncThunk(
    'order/getOrderById',
    async (payload, thunkAPI) => {
        try {
            const token = thunkAPI.getState().staff.token;
            console.log('getlistorder',token);
            console.log("payload",payload);
            const  {data}  = await apiWrapper({}, getOrderByIdApi,payload, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            console.log('payload:',payload);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);