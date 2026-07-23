const express = require('express');
const authenticateToken = require('../middleware/authMeddleware');
const {createBlog, getAllBlogs} = require('../controllers/blogController');

const router = express.Router();

router.post('/createBlog', authenticateToken, createBlog);
router.get('/allBlogs', getAllBlogs);

module.exports = router;