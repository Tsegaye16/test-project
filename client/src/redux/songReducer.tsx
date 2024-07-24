import { createSlice } from "@reduxjs/toolkit";
import { songsData, Song } from "../data/data";

const songSlice = createSlice({
  name: "song",
  initialState: songsData,
  reducers: {
    addSongs: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addSongs } = songSlice.actions;
export default songSlice.reducer;
