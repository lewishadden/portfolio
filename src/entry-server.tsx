import { renderToString } from "react-dom/server";
import App from "./App/App";

export const render = (data) => {
  const html = renderToString(<App data={data} />);
  return { html };
};
