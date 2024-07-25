import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SongState {
  id: string;
  artist: string;
  title: string;
  album: string;
  genre: string;
}

const initialState: SongState[] = [];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<SongState[]>) => {
      return action.payload;
    },
    addSongSlice: (state, action: PayloadAction<SongState>) => {
      return [...state, action.payload];
    },
    editSongSlice: (state, action: PayloadAction<SongState>) => {
      return state.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      return state.filter((song) => song.id !== action.payload);
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songsSlice.actions;
export default songsSlice.reducer;
