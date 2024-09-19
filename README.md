# MERN Blog App

## Description
This is a full-stack blog application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create, read, update, and delete blog posts, as well as comment on posts and manage user authentication.

## Features
- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Responsive design for mobile and desktop

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/mern-blog-app.git
   cd mern-blog-app
   \`\`\`

2. Install server dependencies:
   \`\`\`
   cd server
   npm install
   \`\`\`

3. Install client dependencies:
   \`\`\`
   cd ../client
   npm install
   \`\`\`

4. Create a \`.env\` file in the server directory and add your MongoDB connection string and JWT secret:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   \`\`\`

## Usage

1. Start the server:
   \`\`\`
   cd server
   npm start
   \`\`\`

2. Start the client:
   \`\`\`
   cd client
   npm start
   \`\`\`

3. Open your browser and navigate to \`http://localhost:3000\` to view the app.

## API Endpoints

- POST /api/auth/signup - Create a new user
- POST /api/auth/login - Login user
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get a specific post
- POST /api/posts - Create a new post
- PUT /api/posts/:id - Update a post
- DELETE /api/posts/:id - Delete a post
- POST /api/posts/:id/comments - Add a comment to a post

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
`;
