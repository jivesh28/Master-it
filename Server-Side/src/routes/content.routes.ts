import { Router } from "express";
import multer from "multer";
import {
  getContentByNiche,
  createContent,
  updateContent,
  deleteContent,
} from "../controllers/content.controllers";
import { isAuthenticated, isAdmin } from "../middleware/auth";

const router = Router();

const upload = multer({ dest: "uploads/" });
// View content (for role L or public)

router.get("/:nicheId", getContentByNiche);

// Admin routes
router.post("/", isAuthenticated, isAdmin, upload.single("file"), createContent);
router.put("/:id", isAuthenticated, isAdmin, upload.single("file"), updateContent);
router.delete("/:id", isAuthenticated, isAdmin, deleteContent);

export default router;