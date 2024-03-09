import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

