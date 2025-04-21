import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const todo = state[action.index];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
