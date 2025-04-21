import { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import './Profile.css';

const Profile = () => {
  const { user, login, logout } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simple mock login
      login({ username: formData.username, email: formData.email });
    } else {
      // In a real app, this would register the user
      login({ username: formData.username, email: formData.email });
    }
  };

  if (user) {
    return (
      <div className="profile-container">
        <h1 className="profile-title">Your Profile</h1>
        <div className="profile-info">
          <div className="info-item">
            <p className="info-label">Username:</p>
            <p className="info-value">{user.username}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Email:</p>
            <p className="info-value">{user.email || 'Not provided'}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h1 className="auth-title">{isLogin ? 'Login' : 'Register'}</h1>
      
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      
      <div className="auth-switch">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="switch-button"
        >
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Profile;