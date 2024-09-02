import cookieParser from "cookie-parser";
import favicon from "serve-favicon";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { Routes } from "./constants/routes.constant.js";
import rootRoutes from "./routes/root.route.js";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./db/connect-db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Setup favicon
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Setup routes
app.use(Routes.root.path, rootRoutes);
app.use(Routes.auth.path, authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on port:", PORT);
});
