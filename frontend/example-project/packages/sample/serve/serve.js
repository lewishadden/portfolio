import fs from "fs";

export const main = async (args, context) => {
  //   const htmlTemplate = await fs.readFile("./dist/client/index.html", "utf-8");
  console.log(process.env);
  //   console.log(htmlTemplate);

  let name = args.name || "stranger";
  let greeting = "Hello " + name + "!";
  const html = `<html><body><strong>${greeting}</strong></body></html>`;
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
};
