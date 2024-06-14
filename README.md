
# TypoTales Blog

TypoTales Blog is a full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project allows users to create, edit, delete, and view blog posts. It also includes user authentication and authorization features.


## Features

- User Authentication (Login, Register)
- Create, Read, Update, and Delete (CRUD) operations for blog posts
- User roles and permissions
- Comment functionality
- Admin dashboard
- Responsive design
- Integration with MongoDB for data storage
- Light/dark mode toggle


## Tech Stack

**Frontend:**
  - React
  - Redux (for state management)
  - Tailwind CSS (for styling)


**Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
  - JWT (JSON Web Tokens for authentication)
  - bcrypt (for password hashing)


## Installation

To get a local copy up and running, follow these simple steps:

**Prerequisites**

- Node.js and npm installed
- MongoDB installed and running

1. Clone the repository

```sh
git clone https://github.com/NivedHari/blog-mern.git
cd blog-mern
```
    
2. Install backend dependencies
```sh
npm install
```

3. Create a .env file in the root directory and add the following:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4.Start the backend server
```sh
npm run dev
```

**Frontend Setup**

1. Navigate to the frontend directory
```sh
cd client
```

2. Install frontend dependencies
```sh
npm install
```
3. Create a .env file in the client directory and add the following:
```sh
VITE_FIREBASE_API_KEY="your_firebase_Api_Key"
```
4.Start the frontend server
```sh
npm run dev
```

The application should now be running at http://localhost:5173/
