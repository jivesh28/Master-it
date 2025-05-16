import express from "express";
import cors from "cors";
import './loadEnv'
import { log } from "console";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running...");
  
});

export default app;