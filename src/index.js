import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
const root = document.getElementById("root");

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  root
);
