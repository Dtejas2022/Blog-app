const express = require('express');
const {registerUser, logInUser, getProfile} = require('../controllers/userController');
const authenticateToken = require('../middleware/authMeddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', logInUser);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;