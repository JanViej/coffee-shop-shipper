import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiWrapper} from '../../utils/redux';
// import api
import {getCategoryApi, getDrinkApi} from '../../api/drink';

export const getCategory = createAsyncThunk(
  'drink/getCategory',
  async (payload, thunkAPI) => {
    try {
      const {data} = await apiWrapper({}, getCategoryApi);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getDrink = createAsyncThunk(
  'drink/getDrink',
  async (payload, thunkAPI) => {
    try {
      const res = await apiWrapper({}, getDrinkApi, payload);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);
