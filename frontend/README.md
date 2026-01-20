# ERP Portal Frontend

A modern React frontend for the ERP Portal application with a sleek black theme.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Backend server running on `http://localhost:8000`

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create `.env` file:**
Create a `.env` file in the `frontend` directory with:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

3. **Start development server:**
```bash
npm run dev
```

The application will be available at **http://localhost:5173**

## 📋 Configuration

### Environment Variables

Create a `.env` file in the frontend root:

```env
# Backend API URL
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### Backend Connection

The frontend is configured to connect to:
- **Backend URL**: `http://localhost:8000`
- **API Base**: `http://localhost:8000/api/v1`

Make sure your backend is running on port 8000 before starting the frontend.

## 🛠️ Available Scripts

- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable components (ProtectedRoute)
│   ├── contexts/        # React contexts (AuthContext)
│   ├── pages/          # Page components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── VerifyEmail.jsx
│   │   └── Dashboard.jsx
│   ├── services/       # API services
│   │   └── api.js      # Axios configuration
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

## 🔧 Troubleshooting

### Frontend won't start

1. **Check Node.js version:**
```bash
node --version  # Should be v16 or higher
```

2. **Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Check for port conflicts:**
If port 5173 is in use, change it in `vite.config.js`

### Cannot connect to backend

1. **Verify backend is running:**
   - Open http://localhost:8000 in browser
   - You should see "Welcome to basecampy"

2. **Check `.env` file:**
   - Make sure `VITE_API_BASE_URL=http://localhost:8000/api/v1` exists
   - Restart frontend after creating/updating `.env`

3. **Check CORS:**
   - Backend `.env` should have: `CORS_ORIGIN=http://localhost:5173`
   - Restart backend after updating

### Common Errors

**Error: "Cannot find module 'react'"**
```bash
npm install react react-dom
```

**Error: "Failed to fetch" or CORS errors**
- Verify backend is running
- Check CORS configuration in backend
- Check `.env` files in both frontend and backend

**Error: "Port 5173 already in use"**
- Change port in `vite.config.js`:
  ```js
  server: {
    port: 3000, // or any available port
  }
  ```

## 🌐 API Endpoints

The frontend connects to these backend endpoints:

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/verify-email/:token` - Email verification
- `POST /api/v1/auth/current-user` - Get current user
- `POST /api/v1/auth/refresh-token` - Refresh access token

## 🎨 Features

- ✅ User Authentication (Login/Register)
- ✅ Email Verification
- ✅ Protected Routes
- ✅ ERP-style Dashboard
- ✅ Modern Black Theme UI
- ✅ Responsive Design
- ✅ JWT Token Management

## 📝 Notes

- The frontend uses localStorage to store access tokens
- Cookies are also used for httpOnly tokens (set by backend)
- Email verification links point to the frontend, which then calls the backend API
- All API requests include credentials (cookies) for authentication
