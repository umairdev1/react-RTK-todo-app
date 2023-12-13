import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        completed: false,
      });
    },

    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);

      todo.completed = !todo.completed;
    },
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { todoAdded, todoToggled, todoDeleted } = todoSlice.actions;

export default todoSlice;
