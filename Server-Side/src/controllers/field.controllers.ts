import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import Field from "../models/Field";

export const getAllFields = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fields" });
  }
};

export const createField = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, description } = req.body;
    const newField = await Field.create({ name, description });
    res.status(201).json(newField);
  } catch (error) {
    res.status(500).json({ message: "Error creating field" });
  }
};

export const updateField = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updated = await Field.findByIdAndUpdate(id, { name, description }, { new: true });

    if (!updated) {
      res.status(404).json({ message: "Field not found" });
      return;
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update field" });
  }
};

export const deleteField = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Field.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "Field not found" });
      return;
    }

    res.status(200).json({ message: "Field deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete field" });
  }
};