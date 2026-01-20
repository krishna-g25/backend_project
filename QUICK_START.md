# Quick Start Guide - ERP Portal

## Step 1: Start the Backend

```bash
cd backend
npm install
```

Create `.env` file in `backend` directory:
```env
MONGODB_URI=mongodb://localhost:27017/erp-portal
PORT=8000
CORS_ORIGIN=http://localhost:5173
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_SECRET=your-secret-key-here
REFRESH_TOKEN_SECRET=your-refresh-secret-here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=10d
MAILTRAP_SMTP_HOST=smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USER=your-user
MAILTRAP_SMTP_PASS=your-password
```

Start backend:
```bash
npm run dev
```

Backend will run on: **http://localhost:8000**

## Step 2: Start the Frontend

Open a NEW terminal window:

```bash
cd frontend
npm install
```

Create `.env` file in `frontend` directory:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Start frontend:
```bash
npm run dev
```

Frontend will run on: **http://localhost:5173**

## Step 3: Access the Application

1. Open your browser
2. Go to: **http://localhost:5173**
3. You should see the ERP Portal login page

## Troubleshooting

### Frontend shows error:
1. Make sure backend is running on port 8000
2. Check that `.env` file exists in frontend directory
3. Restart frontend: Stop (Ctrl+C) and run `npm run dev` again
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Cannot connect to backend:
1. Verify backend is running: Open http://localhost:8000 in browser
2. Check backend `.env` has correct CORS_ORIGIN
3. Check frontend `.env` has correct VITE_API_BASE_URL

### Port already in use:
- Backend: Change PORT in backend `.env` file
- Frontend: Change port in `frontend/vite.config.js`

## Testing

1. Register a new user at: http://localhost:5173/register
2. Check your email for verification link
3. Login at: http://localhost:5173/login
4. Access dashboard at: http://localhost:5173/dashboard
