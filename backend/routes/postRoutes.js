const express = require('express');
const router = express.Router(); // Correctly initialize the router
const { createPost, getPosts, getPostById, updatePost, deletePost, getAllUser } = require('../controllers/postController');

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);
router.get('/getAllUsers', getAllUser);

module.exports = router;
