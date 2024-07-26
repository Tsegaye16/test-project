import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./songSaga";

export function* rootSaga() {
  yield all([watchSongsAsync()]);
}
