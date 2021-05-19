import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiWrapper} from '../../utils/redux';
// import api
import {loginApi, getMeApi, updateStaffApi} from '../../api/staff';
import {removeData, storeData} from '../../utils';

export const login = createAsyncThunk(
  'staff/login',
  async (payload, thunkAPI) => {
    try {
      const {data} = await apiWrapper({}, loginApi, payload);
      if (data.data.data.token) {
        await storeData(data.data.data.token, 'sessionToken');
        await storeData(data.data.data.active, 'active');
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk(
  'staff/logout',
  async (payload, thunkAPI) => {
    try {
      await removeData('sessionToken');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getMe = createAsyncThunk(
  'staff/getMe',
  async (payload, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.token;
      const tk = token?.substring(1, token.length-1);
      const {data} = await apiWrapper({}, getMeApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log('err', error);
      return thunkAPI.rejectWithValue();
    }
  },
);
export const updateStaff = createAsyncThunk(
  'staff/updateStaff',
  async(payload,thunkAPI) => {
    try {
      console.log("staff",payload);
      const ob= {
        "username":payload.username,
        "phone":payload.phone,
        "address":payload.address
      }
      const token = thunkAPI.getState().staff.token;
      const {data} = await apiWrapper({}, updateStaffApi, ob, {
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

// export const register = createAsyncThunk(
//   'user/register',
//   async(payload, thunkAPI) => {
//     try {
//       const res = await apiWrapper({}, registerApi, payload);
//       console.log('regis', res);
//       return res;
//     } catch (error) {
//       return thunkAPI.rejectWithValue();
//     }
//   }
// )
