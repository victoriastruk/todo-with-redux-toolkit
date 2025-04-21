import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../store/slices/tasksSlice';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
    weather: weatherReducer,
  },
});
