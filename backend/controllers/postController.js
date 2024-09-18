const BlogPost = require('../models/Post');
const User = require('../models/User');

exports.getPosts = async (req, res) => {
  let user = req.cookies.users
  console.log(user);
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).select('-__v');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
};

exports.createPost = async (req, res) => {
  let user = req.cookies.user
  console.log(user);
  try {
    console.log(req.body);
    const { title, content, author } = req.body;
    const newPost = new BlogPost({ title, content, author , userId: user.id });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  let user = req.cookies.user
  try {
    const { title, content, author } = req.body;
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, content, author, userId: user.id },
      { new: true, runValidators: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};