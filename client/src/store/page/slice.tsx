import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/songsType";

interface SongsState {
  songs: Song[];
  totalCount: number;
}

const initialState: SongsState = {
  songs: [],
  totalCount: 0,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (
      state,
      action: PayloadAction<{ songs: Song[]; totalCount: number }>
    ) => {
      state.songs = action.payload.songs;
      state.totalCount = action.payload.totalCount;
    },
    addSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songsSlice.actions;
export default songsSlice.reducer;
