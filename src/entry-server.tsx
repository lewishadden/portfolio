import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App/App";

export const render = () => {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  return { html };
};
