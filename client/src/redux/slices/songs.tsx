import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../data/data";

const initialState: Song[] = [];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<Song[]>) => {
      return action.payload;
    },
    addSongSlice: (state, action: PayloadAction<Song>) => {
      return [...state, action.payload];
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      return state.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      //console.log("Action", action.payload);
      return state.filter((song) => song._id !== action.payload);
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songsSlice.actions;
export default songsSlice.reducer;
