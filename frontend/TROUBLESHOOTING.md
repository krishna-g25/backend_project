# Frontend Troubleshooting Guide

## Common Issues and Solutions

### 1. Frontend Not Starting

**Error: Cannot find module or import errors**

Solution:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 2. Backend Connection Issues

Make sure:
- Backend is running on `http://localhost:8000`
- Create `.env` file in frontend directory with:
  ```
  VITE_API_BASE_URL=http://localhost:8000/api/v1
  ```
- Restart the frontend after creating `.env` file

### 3. CORS Errors

If you see CORS errors in browser console:
- Check backend `.env` has: `CORS_ORIGIN=http://localhost:5173`
- Restart backend server after updating `.env`

### 4. Port Already in Use

If port 5173 is already in use:
- Change port in `vite.config.js`:
  ```js
  server: {
    port: 3000, // or any other available port
  }
  ```

### 5. React/Import Errors

If you see "React is not defined" or similar:
```bash
cd frontend
npm install react react-dom --save
npm install @vitejs/plugin-react --save-dev
```

## Quick Start Checklist

- [ ] Backend is running on port 8000
- [ ] Frontend `.env` file exists with `VITE_API_BASE_URL=http://localhost:8000/api/v1`
- [ ] All dependencies installed (`npm install` in frontend directory)
- [ ] No port conflicts
- [ ] Browser console shows no errors

## Testing the Connection

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev`
3. Open browser: `http://localhost:5173`
4. You should see the login page
