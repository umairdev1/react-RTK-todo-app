import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/tdodSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
