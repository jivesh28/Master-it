import { Router } from "express";
import { getNichesByField } from "../controllers/niche.controllers";
import { updateNiche, deleteNiche } from "../controllers/niche.controllers";
import { isAuthenticated, isAdmin } from "../middleware/auth";

const router = Router();

router.get("/:fieldId", getNichesByField); 
router.put("/:id", isAuthenticated, isAdmin, updateNiche);
router.delete("/:id", isAuthenticated, isAdmin, deleteNiche);
export default router;