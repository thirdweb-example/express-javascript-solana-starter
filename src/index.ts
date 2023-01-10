import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

import router from "@/routes/router";

dotenv.config();

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "gm",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`The server is up and running at ${port}.`);
});
