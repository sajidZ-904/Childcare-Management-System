import { Request, Response } from 'express';
import { uploadFile, getFile } from '../services/documentService';
import { z } from 'zod';

// Schema validation using Zod
const uploadSchema = z.object({
  file: z.instanceof(Buffer),
  metadata: z.object({
    userId: z.number(),
    fileName: z.string(),
  }),
});

export const uploadDocument = async (req: Request, res: Response) => {
  try {
    const parsedData = uploadSchema.parse(req.body);
    const fileUrl = await uploadFile(parsedData.file, parsedData.metadata);
    res.status(200).json({ fileUrl });
  } catch (error) {
    // Narrow down the type of error
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({ message: error.errors }); // Returns Zod-specific error details
    } else if (error instanceof Error) {
      // Handle generic errors
      res.status(500).json({ message: error.message });
    } else {
      // Handle unknown errors
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const downloadDocument = async (req: Request, res: Response) => {
  const fileId = parseInt(req.params.id);
  try {
    const file = await getFile(fileId);
    res.status(200).json({ file });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
