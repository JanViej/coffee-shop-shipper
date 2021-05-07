import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiWrapper } from '../../utils/redux'

import { getListOrderApi, getOrderByIdApi } from '../../api/order'

export const getListOrder = createAsyncThunk(
    'order/getListOrder',
    async (aylopad, thunkAPI) => {
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
            const { data } = await apiWrapper({}, getListOrderApi, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            console.log('current Order', data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);