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

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'Set-Cookie'],
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
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