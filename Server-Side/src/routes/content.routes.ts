import { Router } from "express";
import { getContentByNiche } from "../controllers/content.controllers";

const router = Router();

router.get("/:nicheId", getContentByNiche);

export default router;