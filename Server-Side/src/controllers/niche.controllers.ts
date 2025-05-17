import { Request, Response } from "express";
import Niche from "../models/Niche";

export const getNichesByField = async (req: Request, res: Response) => {
  try {
    const { fieldId } = req.params;
    const niches = await Niche.find({ field: fieldId });
    res.status(200).json(niches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching niches" });
  }
};

export const createNiche = async (req: Request, res: Response) => {
  try {
    const { name, description, fieldId } = req.body;
    const newNiche = await Niche.create({ name, description, field: fieldId });
    res.status(201).json(newNiche);
  } catch (error) {
    res.status(500).json({ message: "Error creating niche" });
  }
};


import { AuthenticatedRequest } from "../middleware/auth";


export const updateNiche = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, fieldId } = req.body;

    const updated = await Niche.findByIdAndUpdate(
      id,
      { name, description, field: fieldId },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ message: "Niche not found" });
      return;
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update niche" });
  }
};


export const deleteNiche = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Niche.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "Niche not found" });
      return;
    }

    res.status(200).json({ message: "Niche deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete niche" });
  }
};