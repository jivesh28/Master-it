import { Request, Response } from "express";

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