import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  user: [],
  isFetching: false,
  error: null,
};

export const getUserThunk = createAsyncThunk(
  'user/requestStatus',
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  extraReducers: bulder => {
    bulder.addCase(getUserThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isFetching = false;
    });
    bulder.addCase(getUserThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = userSlice;

export default reducer;
