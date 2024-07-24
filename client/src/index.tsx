// index.tsx or index.js
import React from "react";
//import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { createRoot } from "react-dom/client";
import App from "./App";

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
    <App />
  </React.StrictMode>
);
