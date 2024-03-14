import { ViteReactSSG } from "vite-react-ssg/single-page";

import App from "./App/App";
import "./index.scss";

export const createRoot = ViteReactSSG(<App />);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
