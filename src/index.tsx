import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* global-css */
import "./globals/styles/vars.scss";
import "./globals/styles/fonts.scss";
import "./globals/styles/reset.scss";
import "./globals/styles/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

reportWebVitals();
