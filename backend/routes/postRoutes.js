const express = require('express');
const router = express.Router(); // Correctly initialize the router
const { createPost, getPosts, getPostById, updatePost, deletePost, getAllUser, getAllUserPosts } = require('../controllers/postController');
const { authMiddleware } = require('../middlware/authMiddleware');
const upload = require('../cloudinary/multer');

router.post('/posts', upload.single('image'),authMiddleware, createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', upload.single('image') ,authMiddleware, updatePost);
router.delete('/posts/:id', deletePost);
router.get('/getAllUsers', getAllUser);
router.get('/getAllUserPosts/:id', getAllUserPosts);
module.exports = router;
