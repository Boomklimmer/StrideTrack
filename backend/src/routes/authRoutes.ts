// Import the Express library to create routes
import express from 'express';
// Import the registerUser function from the auth controller
import { registerUser } from '../controllers/authController';
// Import the loginUser controller function
import { loginUser } from '../controllers/authController';

// Create a new router object from Express
const router = express.Router();

// Define a POST endpoint at /register
// When a POST request is made to /api/auth/register, call the registerUser function
router.post('/register', registerUser);
// Define a POST endpoint at /login
// When a POST request is made to /api/auth/login, call the loginUser function
router.post('/login', loginUser);
// Export this router so it can be used in the main app
export default router;