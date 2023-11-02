const express = require('express');
const router = express.Router();

// User registration route
router.post('/register', (req, res) => {
  // Implement user registration logic here
});

// Add more routes as needed

const usersController = require('../controllers/usersController');

// User registration route
router.post('/register', usersController.registerUser);

module.exports = router;
