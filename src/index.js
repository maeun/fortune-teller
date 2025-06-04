// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // 👈 추가

import "./index.css";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
