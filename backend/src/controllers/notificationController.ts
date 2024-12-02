import { Request, Response } from 'express';
import { sendEmailNotification, sendPushNotification, sendSMSNotification } from '../services/notificationService';

export const sendNotification = async (req: Request, res: Response) => {
  const { userId, type, message } = req.body;

  try {
    switch (type) {
      case 'email':
        await sendEmailNotification(userId, message);
        break;
      case 'push':
        await sendPushNotification(userId, message);
        break;
      case 'sms':
        await sendSMSNotification(userId, message);
        break;
      default:
        throw new Error('Invalid notification type');
    }
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    if (error instanceof Error) {
      // Handle known error types
      res.status(400).json({ message: error.message });
    } else {
      // Handle unknown error types
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
