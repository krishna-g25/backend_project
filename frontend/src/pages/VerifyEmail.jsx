import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './Auth.css'

const VerifyEmail = () => {
  const { token } = useParams()
  const { verifyEmail } = useAuth()
  const navigate = useNavigate()
  const [status, setStatus] = useState('verifying')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setStatus('error')
        setMessage('Verification token is missing')
        return
      }

      const result = await verifyEmail(token)

      if (result.success) {
        setStatus('success')
        setMessage('Email verified successfully! You can now login.')
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } else {
        setStatus('error')
        setMessage(result.error || 'Email verification failed')
      }
    }

    verify()
  }, [token, verifyEmail, navigate])

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>ERP Portal</h1>
          <p>Email Verification</p>
        </div>

        {status === 'verifying' && (
          <div className="verification-status">
            <p>Verifying your email...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="success-message">
            <p>{message}</p>
            <p>Redirecting to login page...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="error-message">
            <p>{message}</p>
            <Link to="/login" className="auth-button" style={{ marginTop: '20px', display: 'inline-block' }}>
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default VerifyEmail
