import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App/App";
import "./index.scss";

const env = import.meta.env;

console.log(env);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
