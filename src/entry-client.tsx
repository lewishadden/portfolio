import "./index.scss";
import { hydrateRoot } from "react-dom/client";
import App from "./App/App";

let data;

if (typeof window !== "undefined") {
  data = window.__data__;
}

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <App data={data} />
);
