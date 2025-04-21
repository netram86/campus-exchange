import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAppContext();

  return (
    <nav>
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          Campus Exchange
        </Link>
        <div className="nav-links">
          <Link to="/listings" className="nav-link">Browse</Link>
          {user ? (
            <>
              <Link to="/post-item" className="nav-link">Post Item</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={logout} className="nav-button">Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-button">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;