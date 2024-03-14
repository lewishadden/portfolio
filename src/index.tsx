import { ViteReactSSG } from "vite-react-ssg/single-page";

import App from "./App/App";
import "./index.scss";

import data from "./config/portfolio-data.json";

export const createRoot = ViteReactSSG(<App data={data} />);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
