// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // 👈 추가

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
