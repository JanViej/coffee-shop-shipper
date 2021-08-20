import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiWrapper } from '../../utils/redux'

import { getListOrderApi, getOrderByIdApi, updateStatusApi,getListOrderDeliveryApi,getListOrderSuccessApi } from '../../api/order'

export const getListOrder = createAsyncThunk(
    'order/getListOrder',
    async (payload, thunkAPI) => {
        try {
            const token = thunkAPI.getState().staff.token;
            console.log('payload listorder',payload);
            const { data } = await apiWrapper({}, getListOrderApi,payload, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);
export const getListOrderSuccess = createAsyncThunk(
    'order/getListOrderSuccess',
    async (payload, thunkAPI) => {
        try {
            const token = thunkAPI.getState().staff.token;
            const { data } = await apiWrapper({}, getListOrderSuccessApi, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);
export const getListOrderDelivery = createAsyncThunk(
    'order/getListOrderDelivery',
    async (payload, thunkAPI) => {
        try {
            const token = thunkAPI.getState().staff.token;
            const { data } = await apiWrapper({}, getListOrderDeliveryApi, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
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
            const  {data}  = await apiWrapper({}, getOrderByIdApi,payload, {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    },
);

export const updateStatus = createAsyncThunk (
    'order/updateStatus',
    async (payload,thunkAPI) => {
        try {
            console.log(payload.param);
            const ob={
                "status":payload.param
            }
            const token = thunkAPI.getState().staff.token;
            const {data} = await apiWrapper({}, updateStatusApi, payload.id, ob, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            return data;
          } catch (error) {
            return thunkAPI.rejectWithValue();
          }
    },
);