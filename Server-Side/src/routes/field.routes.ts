import { Router } from "express";
import {
  getAllFields,
  createField,
  updateField,
  deleteField,
} from "../controllers/field.controllers";
import { isAuthenticated, isAdmin } from "../middleware/auth";

const router = Router();

// Public: view fields
router.get("/", getAllFields);

// Admin: create, update, delete
router.post("/", isAuthenticated, isAdmin, createField);
router.put("/:id", isAuthenticated, isAdmin, updateField);
router.delete("/:id", isAuthenticated, isAdmin, deleteField);

export default router;