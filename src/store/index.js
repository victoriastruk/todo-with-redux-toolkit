import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../store/slices/tasksSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
})