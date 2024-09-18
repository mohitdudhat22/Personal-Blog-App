const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('../config/dbConnect');
const postRoutes = require('../routes/postRoutes');
const authRoutes = require('../routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// Connect to database
connectDB();

// Middleware

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', postRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;