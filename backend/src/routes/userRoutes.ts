import express, { Request, Response } from 'express';
import pool from '../db';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, height } = req.body;

  if (!first_name || !last_name || !email || !password || !height) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, email, password_hash, height, is_verified)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, first_name, last_name, email, height, is_verified, created_at`,
      [first_name, last_name, email, password, height, false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: any) {
    if (err.code === '23505') {
      res.status(409).json({ error: 'Email already exists.' });
    } else {
      res.status(500).json({ error: 'Database error', details: err.message });
    }
  }
});

export default router;