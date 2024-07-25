import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

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
import { Song } from "../../data/data";

export function* getSongsSaga(): Generator {
  try {
    const response: any = yield call(getSongsAPI);
    console.log(response);
    const songs = response.data.data.songs;
    yield put(getSongsSlice(songs));
  } catch (error) {
    console.error("Failed to fetch songs:", error);
  }
}

export function* createSongSaga(action: PayloadAction<Song>): Generator {
  try {
    yield call(createSongAPI, action.payload);
    yield put(addSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to create song:", error);
  }
}

export function* updateSongSaga(action: PayloadAction<Song>): Generator {
  try {
    console.log("payload", action.payload._id);
    const result = yield call(updateSongAPI, action.payload);
    console.log("result", result);
    yield put(editSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to update song:", error);
  }
}

export function* deleteSongByIdSaga(action: PayloadAction<string>): Generator {
  try {
    console.log("ID", action.payload);
    yield call(deleteSongByIdAPI, action.payload);
    yield put(deleteSongSlice(action.payload));
  } catch (error) {
    console.error("Failed to delete song:", error);
  }
}

export function* watchSongsAsync(): Generator {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga);
}
