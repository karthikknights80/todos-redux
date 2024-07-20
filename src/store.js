import { configureStore } from "@reduxjs/toolkit";
import TodosReducers from "./TodoSlice/todoSlice";
export default configureStore({
  reducer: {
    Todos: TodosReducers,
  },
});
