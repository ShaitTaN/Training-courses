import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);

reportWebVitals();
