import express from 'express';
import { sendNotification } from '../controllers/notificationController';

const router = express.Router();

// Route for sending notifications
router.post('/send', sendNotification);

export default router;
