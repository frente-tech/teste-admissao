import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(process.env.SERVER_PORT, async () => {
  await db.sync();
  console.log(
    `🔥 server esta rodando http://localhost:${process.env.SERVER_PORT} 🔥`
  );
});
