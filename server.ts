import fs from "node:fs/promises";
import express from "express";
import compression from "compression";
import sirv from "sirv";
import { render } from "./dist/server/entry-server.js";
// import { getServerData } from "./dist/function/getServerData.js";

// Constants
const port = process.env.PORT || 80;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = await fs.readFile("./dist/client/index.html", "utf-8");
const data = JSON.parse(
  await fs.readFile("./dist/client/portfolio-data.json", "utf-8")
);

const ssrManifest = await fs.readFile(
  "./dist/client/.vite/ssr-manifest.json",
  "utf-8"
);

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
app.use(compression());
app.use(base, sirv("./dist/client", { extensions: [] }));

// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");
    let template = templateHtml;

    // const data = await getServerData();
    const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

    const rendered = await render(data);
    console.log(rendered);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-data-->`, script ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
