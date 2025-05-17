import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

import Content from "../models/Content";

export const getContentByNiche = async (req: Request, res: Response) => {
  try {
    const { nicheId } = req.params;
    const content = await Content.find({ niche: nicheId });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "Error fetching content" });
  }
};

export const createContent = async (req: MulterRequest, res: Response) => {
  try {
    const { title, description, type, nicheId } = req.body;

    let fileUrl: string | undefined = undefined;
    if (req.file) {
      fileUrl = `/uploads/${req.file.filename}`;
    }

    const newContent = await Content.create({
      title,
      description,
      type,
      fileUrl,
      niche: nicheId,
    });

    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: "Error creating content" });
  }
};

// UPDATE Content
export const updateContent = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, type, nicheId } = req.body;

    const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updated = await Content.findByIdAndUpdate(
      id,
      {
        title,
        description,
        type,
        niche: nicheId,
        ...(fileUrl && { fileUrl }),
      },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ message: "Content not found" });
      return;
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update content" });
  }
};

// DELETE Content
export const deleteContent = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Content.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "Content not found" });
      return;
    }

    res.status(200).json({ message: "Content deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete content" });
  }
};