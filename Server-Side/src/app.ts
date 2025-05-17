import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import fieldRoutes from "./routes/field.routes";
import nicheRoutes from "./routes/niche.routes";
import contentRoutes from "./routes/content.routes";
import authRoutes from "./routes/auth.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/fields", fieldRoutes);
app.use("/api/niches", nicheRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
export default app;