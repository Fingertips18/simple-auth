import express from "express";
import dotenv from "dotenv";

import { Routes } from "./constants/routes.constant.js";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./db/connect-db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(Routes.auth.path, authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on port:", PORT);
});
