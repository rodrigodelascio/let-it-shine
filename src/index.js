import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
