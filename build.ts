import fs from "node:fs/promises";
import { render } from "./dist/server/entry-server.js";
// import { getServerData } from "./dist/function/getServerData.js";

// Cached production assets
const templateHtml = await fs.readFile("./dist/client/index.html", "utf-8");
const data = JSON.parse(
  await fs.readFile("./dist/client/portfolio-data.json", "utf-8")
);
let template = templateHtml;

const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

const rendered = await render(data);

const html = template
  .replace(`<!--app-head-->`, rendered.head ?? "")
  .replace(`<!--app-data-->`, script ?? "")
  .replace(`<!--app-html-->`, rendered.html ?? "");

await fs.writeFile("./public/index.html", html);
