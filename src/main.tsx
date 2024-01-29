import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngular,
  faReact,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import "./index.scss";

library.add(fab, faAngular, faGithub, faReact, faLinkedinIn, faHourglassStart);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
