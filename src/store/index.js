import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../store/slices/tasksSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
})