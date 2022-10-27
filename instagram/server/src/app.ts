import express from "express";
import multer from "multer";

import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./routes/authRouter";
import postRouter from "./routes/postRouter";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

const storage = multer.memoryStorage();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(
  multer({ storage }).fields([
    { name: "file", maxCount: 10 },
    { name: "content", maxCount: 1 },
  ])
);

app.use("/auth", authRouter);
app.use("/post", postRouter);

app.listen(app.get("port"), () => {
  console.log("Server on", app.get("port"));
});
