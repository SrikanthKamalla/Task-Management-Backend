import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

import routes from "./src/routes/index.js";
import connectDB from "./src/configs/mongoose.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1000,
  message: "Too many requests, please try again later.",
});

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use("/api", limiter, routes);

app.use(errorHandler);

app.listen(PORT, () => {});
