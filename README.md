# 🔐 MERN Authentication Backend Project

> A comprehensive learning project for building a secure authentication system using the MERN (MongoDB, Express.js, React, Node.js) stack

![Status](https://img.shields.io/badge/Status-50%25%20Complete-yellow?style=flat-square)
![Node](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-black?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 📖 Overview

This is an **educational project** designed to learn and implement a production-grade authentication system using the MERN stack. The project demonstrates best practices for user authentication, security, and API design.

### Current Progress: **50% Complete** ✅

- ✅ Backend API structure setup
- ✅ MongoDB database configuration
- ✅ User model and schema
- ✅ Basic authentication routes
- ✅ JWT token implementation
- ✅ Password hashing with bcrypt
- ✅ Health check endpoint
- 🚀 More features in development

---

## 🎯 Project Goals

1. **Learn MERN Stack** - Master the complete MERN development workflow
2. **Implement Secure Authentication** - Understand JWT, session management, and security best practices
3. **RESTful API Design** - Build clean, scalable, and well-documented APIs
4. **Database Management** - Work with MongoDB and implement proper data schemas
5. **Error Handling** - Implement comprehensive error handling and validation
6. **Code Quality** - Follow best practices and maintain clean code

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **Dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Prettier** - Code formatter

### Tools & Utilities
- **Git** - Version control
- **npm** - Package manager
- **Postman** - API testing (recommended)
- **VS Code** - Code editor

---

## 📁 Project Structure

```
backend_project/
├── src/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── utils/            # Utility functions
│   └── server.js         # Server entry point
├── public/images/        # Static files
├── .env                  # Environment variables (not in git)
├── .gitignore           # Git ignore file
├── .prettierrc          # Prettier config
├── .prettierignore      # Prettier ignore
├── package.json         # Dependencies and scripts
├── package-lock.json    # Locked dependency versions
└── README.md           # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishna-g25/backend_project.git
   cd backend_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Server will run on `http://localhost:5000`

---

## 📚 API Endpoints

### Authentication Routes

#### 1. Register User
- **Route:** `POST /api/auth/register`
- **Description:** Create a new user account
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:** User object with JWT token

#### 2. Login User
- **Route:** `POST /api/auth/login`
- **Description:** Authenticate user and get JWT token
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:** User object with JWT token

#### 3. Get Current User
- **Route:** `GET /api/auth/me`
- **Description:** Get authenticated user details
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Current user object

#### 4. Health Check
- **Route:** `GET /api/health`
- **Description:** Check if server is running
- **Response:** Status message

---

## 🔐 Security Features

✅ **Password Hashing** - Using bcryptjs for secure password storage
✅ **JWT Authentication** - Token-based stateless authentication
✅ **Environment Variables** - Sensitive data stored in .env
✅ **CORS** - Configured for cross-origin requests
✅ **Input Validation** - Data validation on routes
✅ **Error Handling** - Comprehensive error responses
✅ **HTTP Only Cookies** (in progress)
✅ **Rate Limiting** (planned)

---

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

---

## 🧪 Testing API Endpoints

### Using cURL
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Get Current User
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman
1. Import the API endpoints
2. Set up environment variables for token
3. Test each endpoint

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Authentication](https://jwt.io/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [MERN Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

---

## 🔄 Development Roadmap

### Phase 1: Core Authentication (50% ✅)
- [x] User registration
- [x] User login
- [x] JWT token generation
- [x] Password hashing
- [ ] Token refresh mechanism
- [ ] Logout functionality

### Phase 2: Advanced Features (In Progress)
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Rate limiting
- [ ] Request logging
- [ ] Role-based access control (RBAC)

### Phase 3: Frontend Integration
- [ ] React component setup
- [ ] Authentication flow integration
- [ ] Protected routes
- [ ] User dashboard

### Phase 4: Deployment
- [ ] Docker containerization
- [ ] Environment setup
- [ ] CI/CD pipeline
- [ ] Production deployment

---

## 🤝 Contributing

This is a learning project. Feel free to:
- Create issues for bugs or suggestions
- Submit pull requests with improvements
- Share feedback and ideas

---

## 📝 Key Learnings

### What I've Learned So Far:
1. Setting up Express.js servers
2. Connecting to MongoDB with Mongoose
3. Creating RESTful API endpoints
4. JWT token-based authentication
5. Password hashing with bcryptjs
6. Error handling in Node.js
7. Environment variable management
8. API request/response handling

### Currently Learning:
- Advanced authentication patterns
- Database optimization
- Testing with Jest/Mocha
- Deployment strategies

---

## 🐛 Known Issues

- [ ] Token expiration not fully implemented
- [ ] Need password reset functionality
- [ ] Rate limiting not configured
- [ ] Frontend integration pending

---

## 📞 Contact & Support

- **Email:** goelkrishna965@gmail.com
- **LinkedIn:** [Krishna Goel](https://www.linkedin.com/in/krishna-goel-38a345275/)
- **GitHub:** [@krishna-g25](https://github.com/krishna-g25)
- **Location:** Jaipur, Rajasthan, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
Made with ❤️ by Krishna Goel
© 2026. Learning & Building MERN Applications
```

---

## ⭐ Support

If you find this project helpful, please:
- Give it a ⭐ star on GitHub
- Share it with others learning MERN
- Provide feedback and suggestions

---

**Last Updated:** January 2026
**Project Status:** 🚀 Active Development
**Progress:** 50% Complete
