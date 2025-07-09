import dotenv from 'dotenv';
dotenv.config(); // <-- This should be at the very top, before anything else

import express from 'express';
import pool from './db';

// Test database connection
pool.connect()
  .then(() => {
    console.log('Success: Connected to PostgreSQL database!');
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL database:', err);
  });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'StrideTrack backend is running',
    timestamp: new Date().toISOString()
  });
});

// Basic root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to StrideTrack API',
    version: '1.0.0'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`API base URL: http://localhost:${PORT}`);
});

export default app; 