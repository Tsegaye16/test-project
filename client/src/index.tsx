// index.tsx or index.js
import React from "react";
import { Global, css } from "@emotion/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store"; // Import the Redux store

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #14145a;
  }
`;

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Provider store={store}>
      {" "}
      {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
