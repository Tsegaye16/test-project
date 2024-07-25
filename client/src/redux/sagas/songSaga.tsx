import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
  getSongsAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongByIdAPI,
} from "../../apis/api";
import {
  addSongSlice,
  deleteSongSlice,
  editSongSlice,
  getSongsSlice,
} from "../slices/songs";
import {
  CREATE_SONG,
  DELETE_SONG_BY_ID,
  GET_SONGS,
  UPDATE_SONG_BY_ID,
} from "../types/type";

interface Song {
  id: string;
  artist: string;
  title: string;
  album: string;
  genre: string;
}

interface SongsResponse {
  status: string;
  results: number;
  data: {
    songs: Song[];
  };
}

export function* getSongsSaga(): Generator {
  try {
    const response: any = yield call(getSongsAPI);
    console.log(response);
    const songs = response.data.data.songs;
    yield put(getSongsSlice(songs)); // Ensure data is accessed properly
  } catch (error) {
    console.error("Failed to fetch songs:", error);
    // Handle error appropriately
  }
}

export function* createSongSaga(action: PayloadAction<Song>): Generator {
  try {
    yield call(createSongAPI, action.payload);
    yield put(addSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to create song:", error);
    // Handle error appropriately
  }
}

export function* updateSongSaga(action: PayloadAction<Song>): Generator {
  try {
    yield call(updateSongAPI, action.payload);
    yield put(editSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to update song:", error);
    // Handle error appropriately
  }
}

export function* deleteSongByIdSaga(action: PayloadAction<string>): Generator {
  try {
    yield call(deleteSongByIdAPI, action.payload);
    yield put(deleteSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to delete song:", error);
    // Handle error appropriately
  }
}

export function* watchSongsAsync(): Generator {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga);
}
