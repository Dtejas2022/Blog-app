const express = require('express');
const authenticateToken = require('../middleware/authMeddleware');
const {createBlog, getAllBlogs, findSingleBlog, updateBlog, deleteBlog} = require('../controllers/blogController');

const router = express.Router();

router.post('/createBlog', authenticateToken, createBlog);
router.get('/allBlogs', getAllBlogs);
router.get('/findBlog/:id', findSingleBlog);
router.put('/updateBlog/:id', authenticateToken, updateBlog);
router.delete('/deleteBlog/:id', authenticateToken, deleteBlog);
module.exports = router;