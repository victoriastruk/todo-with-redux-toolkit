import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  weather: {},
  isFetching: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(
  'weather/requestStatus',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.getWeather();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeatherThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isFetching = false;
    });
    builder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = weatherSlice;

export default reducer;
