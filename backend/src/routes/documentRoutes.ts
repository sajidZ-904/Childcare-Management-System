import express from 'express';
import { uploadDocument, downloadDocument } from '../controllers/documentController';

const router = express.Router();

// Route for uploading a document
router.post('/upload', uploadDocument);

// Route for downloading a document by ID
router.get('/download/:id', downloadDocument);

export default router;
