

# Task Management App 
A robust Node.js/Express backend for a full-stack task management application with JWT authentication and MongoDB integration.

---

## 🚀 Features
- 🔐 Authentication System
- User registration and login
- JWT-based authentication
- Protected routes and API endpoints
- Password hashing with bcrypt

## 📝 Task Management
- Create, read, update, and delete tasks
- Search and filter tasks
- Responsive task list interface
- Real-time updates

## 👤 User Profile
- View and update user information
- Profile management interface

# Secure profile data handling

## 🛡️ Security
- Password hashing
- JWT token validation
- Input validation on client and server
- CORS protection
- Ratelimiter

# Tech Stack


## 🚀 Features
- JWT Authentication - Secure user registration and login

- Task CRUD Operations - Full Create, Read, Update, Delete functionality

- User Profile Management - Update user information securely

- RESTful API Design - Clean and consistent API endpoints

- MongoDB Integration - NoSQL database for flexible data storage

- Security Best Practices - Password hashing, input validation, CORS protection

## 🛠️ Tech Stack
- Runtime: Node.js

- Framework: Express.js

- Database: MongoDB with Mongoose ODM

- Authentication: JWT (jsonwebtoken)

- Password Hashing: bcryptjs

- Environment Variables: dotenv

- CORS: cors middleware

## 📋 Prerequisites
- Node.js (v14 or higher)

- MongoDB (local or Atlas cloud)

- npm or yarn


# 📚 API Endpoints
## Authentication Routes
### Method	Endpoint	Description	Auth Required
- POST	/api/auth/signup	Register new user	No
- POST	/api/auth/login	User login	No
## Task Routes
### Method	Endpoint	Description	Auth Required
- GET	/api/tasks	Get all user tasks	Yes
- POST	/api/tasks	Create new task	Yes
- PUT	/api/tasks/:id	Update task	Yes
- DELETE	/api/tasks/:id	Delete task	Yes
## Profile Routes
### Method	Endpoint	Description	Auth Required
- GET	/api/profile	Get user profile	Yes
- PUT	/api/profile	Update user profile	Yes

<a href="https://task-management-frontend-alpha-one.vercel.app/">Live Demo</a>


### Install my-project
#### Frontend
  - git clone https://github.com/SrikanthKamalla/Task-Management-Frontend
  - cd "folder name"
  - npm i
  - npm run dev

#### Backend
 - git clone https://github.com/SrikanthKamalla/Task-Management-Backend
  - cd "folder name"
  - npm i
  - npm run dev


## Environment Variables
#### Frontend
```
  VITE_API_URL ->your backend url 
```
#### Backend
```
  PORT
  MONGODB_URI
  JWT_SECRET_KEY
  FRONTEND_URL
```

## Pages & Functionality
### Login & Signup

- Secure authentication for trustees, school admins.
- JWT-based session management.

### Dashboard

Displays key statistics:

- Total tasks.

- Shows completed, pending and task priorities.


### Tasks

- Add task with priorities and due date.
- We can see all Tasks in this page.
- Search tasks based on search input, status and priorities.
