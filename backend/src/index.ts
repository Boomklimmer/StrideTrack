// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config(); // This must be at the very top

// Import required modules
import express from 'express'; // Express web framework
import pool from './db'; // PostgreSQL connection pool\
import authRoutes from './routes/authRoutes'; // Import the auth routes
import userRoutes from './routes/userRoutes'; // User-related API routes

// Test database connection at startup
pool.connect()
  .then(() => {
    console.log('Success: Connected to PostgreSQL database!');
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL database:', err);
  });

// Create an Express application
const app = express();
// Set the port (from environment or default to 3001)
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount user-related routes at /api/users (e.g., /api/users/register)
app.use('/api/users', userRoutes);
// Use the auth routes for any requests to /api/auth
app.use('/api/auth', authRoutes);
// Health check endpoint for monitoring server status
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'StrideTrack backend is running',
    timestamp: new Date().toISOString()
  });
});

// Basic root endpoint (welcome/info)
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to StrideTrack API',
    version: '1.0.0'
  });
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`API base URL: http://localhost:${PORT}`);
});

// Export the app (useful for testing)
export default app; 