const express = require('express');
const authenticateToken = require('../middleware/authMeddleware');
const {createBlog, getAllBlogs, findSingleBlog, updateBlog} = require('../controllers/blogController');

const router = express.Router();

router.post('/createBlog', authenticateToken, createBlog);
router.get('/allBlogs', getAllBlogs);
router.get('/findBlog/:id', findSingleBlog);
router.put('/updateBlog/:id', updateBlog);

module.exports = router;