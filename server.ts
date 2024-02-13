import fs from "node:fs/promises";
import express from "express";

// Constants
const port = process.env.PORT || 80;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = await fs.readFile("./dist/client/index.html", "utf-8");
const ssrManifest = await fs.readFile(
  "./dist/client/.vite/ssr-manifest.json",
  "utf-8"
);

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
const compression = (await import("compression")).default;
const sirv = (await import("sirv")).default;
app.use(compression());
app.use(base, sirv("./dist/client", { extensions: [] }));

// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template = templateHtml;
    let render = (await import("./dist/server/entry-server.js")).render;

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
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
