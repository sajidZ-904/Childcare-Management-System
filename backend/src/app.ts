import express from 'express';
import documentRoutes from './routes/documentRoutes';
import notificationRoutes from './routes/notificationRoutes';

const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// API routes
app.use('/api/documents', documentRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
