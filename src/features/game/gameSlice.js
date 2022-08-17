import { createSlice } from "@reduxjs/toolkit";
import { fill, map } from "lodash";

function createInitialTileGrid() {
  let tileGrid = fill(Array(24), {});
  map(tileGrid, (tile, index) => {
    return {
      id: index,
      isSelected: false,
      iconId: null,
    };
  });
  return tileGrid;
}

const initialState = {
  value: 0,
  tileGrid: createInitialTileGrid(),
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
