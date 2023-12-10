import { createSlice } from "@reduxjs/toolkit";
import toDoInitialState from "../initialStates/ToDoStates";

const toDoStateSlice = createSlice({
  name: "toDoData",
  initialState: toDoInitialState,
  reducers: {
    setToDoData(state, action) {
      return { ...state, toDoItems: action.payload };
    },
  },
});

export const { setToDoData } = toDoStateSlice.actions;

export default toDoStateSlice.reducer;
