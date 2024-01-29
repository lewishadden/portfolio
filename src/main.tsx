import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons/faAngular";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";

import "./index.scss";

library.add(fab, faAngular);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
