import { Router } from "express";
import { getAllFields } from "../controllers/field.controllers";

const router = Router();

router.get("/", getAllFields); 

export default router;