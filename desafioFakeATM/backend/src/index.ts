import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

require("dotenv").config();

const app = express();
app.use(json());
app.use(router);

app.listen(process.env.ENDPOINT_NODE || 3000, async () => {
  await db.sync();
  console.log(
    `🚀 Server running on https://localhost:${process.env.ENDPOINT_NODE} 🚀`
  );
});
