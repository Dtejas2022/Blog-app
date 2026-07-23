const express = require('express');
const authenticateToken = require('../middleware/authMeddleware');
const {createBlog} = require('../controllers/blogController');

const router = express.Router();

router.post('/createBlog', authenticateToken, createBlog);

module.exports = router;