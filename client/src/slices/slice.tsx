import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../types/songsType";

interface SongsState {
  songs: Song[];
  totalCount: number;
  pageSize: number;
  sortAttribute: string;
  sortOrder: string;
}

const initialState: SongsState = {
  songs: [],
  totalCount: 0,
  pageSize: 5,
  sortAttribute: "artist",
  sortOrder: "asc",
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (
      state,
      action: PayloadAction<{
        songs: Song[];
        totalCount: number;
        pageSize: number;
        sortAttribute: string;
        sortOrder: string;
      }>
    ) => {
      state.songs = action.payload.songs;
      state.totalCount = action.payload.totalCount;
      state.pageSize = action.payload.pageSize;
      state.sortAttribute = action.payload.sortAttribute;
      state.sortOrder = action.payload.sortOrder;
    },
    addSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      const updatedSongIndex = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );

      if (updatedSongIndex !== -1) {
        return {
          ...state,
          songs: [
            ...state.songs.slice(0, updatedSongIndex),
            action.payload,
            ...state.songs.slice(updatedSongIndex + 1),
          ],
        };
      }

      return state; // No change if song not found
    },
    // editSongSlice: (state, action: PayloadAction<Song>) => {
    //         state.songs = state.songs.map((song) =>
    //           song._id === action.payload._id ? action.payload : song
    //         );
    //       },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songsSlice.actions;
export default songsSlice.reducer;
