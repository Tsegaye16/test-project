// store.ts
import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
