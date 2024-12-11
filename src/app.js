import * as dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import router from "./routes/email.js";

const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", router);

export default app;
