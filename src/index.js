import dotenv from "dotenv";
import express from "express";
import router from "./routes/router.js";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
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
