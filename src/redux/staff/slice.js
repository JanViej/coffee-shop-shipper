import {createSlice} from '@reduxjs/toolkit';
import {login, logout, getMe,updateStaff} from './actions';

export const initialState = {
  data: [],
  loading: false,
  isAuthenticated: false,
  token: '',
  isActive: false,
};

export const {reducer, actions} = createSlice({
  name: 'Staff',
  initialState,
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload;
      state.isAuthenticated = true;
    },
    setActive: (state, {payload}) => {
      state.isActive = payload;
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, {payload}) => {
      state.data = payload.data.data;
      state.isAuthenticated = true;
      state.token = payload.data.data.token;
      state.loading = false;
    },
    [login.pending]: state => {
      state.loading = true;
    },
    [login.rejected]: (state, {payload}) => {
      state.loading = false;
    },
    [logout.fulfilled]: (state) => {
      state.isAuthenticated = false;
      state.token = '';
    },
    [getMe.fulfilled]: (state, {payload}) => {
      state.data = payload.data.data;
    },
    [updateStaff.fulfilled]: (state, {payload}) => {
      state.data = payload.data;
    },
  },
});

export default reducer;
