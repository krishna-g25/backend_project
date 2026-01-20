# ERP Portal - Complete Setup Guide

## Overview

This is a full-stack ERP Portal application with:
- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React + Vite
- **Features**: User authentication, email verification, ERP-style dashboard with black theme

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend root with the following variables:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/erp-portal

# Server
PORT=8000
CORS_ORIGIN=http://localhost:5173

# Frontend URL (for email verification links)
FRONTEND_URL=http://localhost:5173

# JWT Secrets
ACCESS_TOKEN_SECRET=your-access-token-secret-here
REFRESH_TOKEN_SECRET=your-refresh-token-secret-here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=10d

# Email Configuration (Mailtrap or your SMTP)
MAILTRAP_SMTP_HOST=smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USER=your-mailtrap-user
MAILTRAP_SMTP_PASS=your-mailtrap-password

# Forgot Password Redirect (optional)
FORGOT_PASSWORD_REDIRECT_URL=http://localhost:5173/reset-password
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:8000`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features

### Authentication
- User registration with email verification
- Login/Logout functionality
- Protected routes
- JWT token management with refresh tokens

### Email Verification
- Automatic email sent on registration
- Email verification link points to frontend
- Verification status shown in dashboard

### ERP Dashboard
- Modern black theme UI
- Sidebar navigation with modules:
  - Overview (with stats cards)
  - Employees
  - Projects
  - Finance
  - Inventory
  - Reports
  - Settings
- User profile information
- Email verification status indicator

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middlewares/    # Custom middlewares
│   ├── utils/          # Utility functions
│   └── validators/     # Input validators
└── frontend/
    ├── src/
    │   ├── components/ # Reusable components
    │   ├── contexts/   # React contexts
    │   ├── pages/      # Page components
    │   └── services/   # API services
    └── public/         # Static assets
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/verify-email/:token` - Verify email
- `POST /api/v1/auth/current-user` - Get current user
- `POST /api/v1/auth/refresh-token` - Refresh access token

## Development Notes

- The backend uses cookies for token storage (httpOnly, secure)
- The frontend also stores tokens in localStorage for API calls
- Email verification links point to the frontend, which then calls the backend API
- CORS is configured to allow requests from `http://localhost:5173`

## Troubleshooting

1. **CORS errors**: Make sure `CORS_ORIGIN` in backend `.env` matches your frontend URL
2. **Email not sending**: Check your Mailtrap/SMTP credentials
3. **Database connection**: Ensure MongoDB is running and `MONGODB_URI` is correct
4. **Token issues**: Verify JWT secrets are set in `.env`

## Next Steps

- Implement the ERP modules (Employees, Projects, Finance, etc.)
- Add more features to the dashboard
- Enhance the UI/UX
- Add more authentication features (2FA, password reset, etc.)
