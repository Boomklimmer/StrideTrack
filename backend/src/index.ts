import express from 'express';

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
  console.log(`🚀 StrideTrack backend server running on port ${PORT}`);
  console.log(`📊 Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`🌐 API base URL: http://localhost:${PORT}`);
});

export default app; 