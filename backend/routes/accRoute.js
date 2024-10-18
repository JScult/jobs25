const express = require('express');
const Acc = require('../models/Acc.model');

const router = express.Router();

// POST API to create a new account
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body; 
    // Validate the input data (basic validation)
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    // Create a new account
    const newAccount = await Acc.create({
      email,
      password,
      role: role, // Set default role if not provided
    });
    res.status(201).json(newAccount);
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
