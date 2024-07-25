import { configureStore } from "@reduxjs/toolkit";
import songs from "./redux/slices/songs";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
