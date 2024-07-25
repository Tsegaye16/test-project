import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../slices/songs";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
