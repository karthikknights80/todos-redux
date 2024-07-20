import { createSlice } from "@reduxjs/toolkit";

export const todoslice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    ADD_TODO: (state, action) => {
      state.unshift(action.payload); //correct approach
      //   return [action.payload, ...state]; // this also works
    },
    REMOVE_TODO: (state, action) => {
      const { idx } = action.payload;
      return state.filter((x) => x.idx !== idx);
    },
  },
});

export const { ADD_TODO, SHOW, REMOVE_TODO } = todoslice.actions;
export default todoslice.reducer;
