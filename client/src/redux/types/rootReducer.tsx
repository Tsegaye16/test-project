import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../slices/songs";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  songs: songsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
