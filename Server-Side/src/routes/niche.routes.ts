import { Router } from "express";
import { getNichesByField } from "../controllers/niche.controllers";

const router = Router();

router.get("/:fieldId", getNichesByField); 

export default router;