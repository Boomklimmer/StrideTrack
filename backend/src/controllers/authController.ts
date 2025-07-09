import { Request, Response } from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import db from '../db';
import jwt from 'jsonwebtoken';
// Define a Joi schema for registration validation
const registrationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  height: Joi.number().required()
});
// Define a Joi schema for login validation
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const registerUser = async (req: Request, res: Response) => {
  try {
    // 1. Validate the input using Joi
    const { error } = registrationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // 2. Get user data from the request body
    const { firstName, lastName, email, password, height } = req.body;

    // 3. Check if the email is already registered
    const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email is already registered.' });
    }

    // 4. Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 5. Insert the new user into the database
    await db.query(
      'INSERT INTO users (first_name, last_name, email, password_hash, height) VALUES ($1, $2, $3, $4, $5)',
      [firstName, lastName, email, hashedPassword, height]
    );

    // 6. Respond with success
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    // 7. Handle any errors
    console.error('Registration error:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
};
// This function will handle user login
export const loginUser = async (req: Request, res: Response) => {
  try {
    // 1. Validate the input using Joi
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // 2. Get email and password from the request body
    const { email, password } = req.body;

    // 3. Check if the user exists in the database
    const userResult = await db.query('SELECT id,email,password_hash FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const user = userResult.rows[0];

    // 4. Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // 5. Create a JWT token (replace 'your_jwt_secret' with your actual secret, ideally from an environment variable)
    const token = jwt.sign(
      { userId: user.id, email: user.email },//need to check for OOP programmming ryan 
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // 6. Respond with the token and a success message
    res.json({ message: 'Login successful!', token });
  } catch (error) {
    // 7. Handle any errors
    console.error('Login error:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
};