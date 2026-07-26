const express = require('express');
const authenticateToken = require('../middleware/authMeddleware');
const validateObjectId = require('../middleware/validateObjectId');
const {createBlog, getAllBlogs, findSingleBlog, updateBlog, deleteBlog} = require('../controllers/blogController');

const router = express.Router();

router.post('/createBlog', authenticateToken, createBlog);
router.get('/allBlogs', getAllBlogs);
router.get('/findBlog/:id', validateObjectId, findSingleBlog);
router.put('/updateBlog/:id', authenticateToken, validateObjectId, updateBlog);
router.delete('/deleteBlog/:id', authenticateToken, validateObjectId, deleteBlog);
module.exports = router;