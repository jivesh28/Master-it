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
