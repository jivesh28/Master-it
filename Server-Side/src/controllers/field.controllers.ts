import { Request, Response } from "express";
import Field from "../models/Field";

export const getAllFields = async (req: Request, res: Response) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fields" });
  }
};

export const createField = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newField = await Field.create({ name, description });
    res.status(201).json(newField);
  } catch (error) {
    res.status(500).json({ message: "Error creating field" });
  }
};
