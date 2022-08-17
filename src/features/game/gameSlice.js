import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = gameSlice.actions;

export default gameSlice.reducer;
