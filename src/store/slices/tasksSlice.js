import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    task: 'Example task',
    deadline: '2025-04-01',
    completed: false
  }
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        ...action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const todo = state[action.payload];
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
