// index.tsx or index.js
import React from "react";
//import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./redux/songReducer";

const root = createRoot(document.getElementById("root") as HTMLElement);

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
