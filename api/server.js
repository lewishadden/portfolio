// require('dotenv').config({ path: __dirname+'/.env', override: true });
import express from "express";
import {
  json as bodyParserJson,
  urlencoded as bodyParserUrlencoded,
} from "body-parser";
import cors from "cors";
import sendMail from "./utils/sendMail.js";

const { PORT } = import.meta.env;

const port = PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParserJson());
app.use(bodyParserUrlencoded({ extended: true }));

app.post("/api/sendmail", async (req, res) => {
  const { firstName, lastName, email: to, message } = req.body;
  const subject = "New Portfolio message";

  try {
    await sendMail(
      `${firstName} ${lastName}`,
      "lewishadden@gmail.com",
      to,
      subject,
      message
    );
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
