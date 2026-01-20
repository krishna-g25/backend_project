import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeModule, setActiveModule] = useState('overview')

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const modules = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'employees', name: 'Employees', icon: '👥' },
    { id: 'projects', name: 'Projects', icon: '📁' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'inventory', name: 'Inventory', icon: '📦' },
    { id: 'reports', name: 'Reports', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ]

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'overview':
        return (
          <div className="module-content">
            <h2>Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>Employees</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📁</div>
                <div className="stat-info">
                  <h3>Active Projects</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <h3>Revenue</h3>
                  <p className="stat-value">$0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📦</div>
                <div className="stat-info">
                  <h3>Inventory Items</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
            </div>
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <p className="empty-state">No recent activity</p>
            </div>
          </div>
        )
      case 'employees':
        return (
          <div className="module-content">
            <h2>Employee Management</h2>
            <p className="empty-state">Employee management module coming soon...</p>
          </div>
        )
      case 'projects':
        return (
          <div className="module-content">
            <h2>Project Management</h2>
            <p className="empty-state">Project management module coming soon...</p>
          </div>
        )
      case 'finance':
        return (
          <div className="module-content">
            <h2>Finance & Accounting</h2>
            <p className="empty-state">Finance module coming soon...</p>
          </div>
        )
      case 'inventory':
        return (
          <div className="module-content">
            <h2>Inventory Management</h2>
            <p className="empty-state">Inventory module coming soon...</p>
          </div>
        )
      case 'reports':
        return (
          <div className="module-content">
            <h2>Reports & Analytics</h2>
            <p className="empty-state">Reports module coming soon...</p>
          </div>
        )
      case 'settings':
        return (
          <div className="module-content">
            <h2>Settings</h2>
            <div className="settings-section">
              <h3>Account Information</h3>
              <div className="info-card">
                <p><strong>Username:</strong> {user?.username}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Email Verified:</strong> {user?.isEmailVerified ? '✅ Yes' : '❌ No'}</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>ERP Portal</h1>
        </div>
        <nav className="sidebar-nav">
          {modules.map((module) => (
            <button
              key={module.id}
              className={`nav-item ${activeModule === module.id ? 'active' : ''}`}
              onClick={() => setActiveModule(module.id)}
            >
              <span className="nav-icon">{module.icon}</span>
              <span className="nav-text">{module.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <h2>{modules.find(m => m.id === activeModule)?.name || 'Dashboard'}</h2>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">{user?.username || 'User'}</span>
              {!user?.isEmailVerified && (
                <span className="verification-badge">⚠️ Unverified</span>
              )}
            </div>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </header>

        <div className="content-area">
          {renderModuleContent()}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
