import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./slice";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
