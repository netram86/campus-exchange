import { useAppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { items, loading } = useAppContext();

  return (
    <div className="container">
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Campus Exchange</h1>
            <p>Buy, sell, and trade items with fellow students</p>
            <Link to="/post-item" className="hero-button">Post an Item</Link>
          </div>
        </section>

        <section className="recent-listings">
          <h2>Recent Listings</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="items-grid">
              {items.map(item => (
                <Link to={`/item/${item.id}`} key={item.id} className="item-card">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                  <div className="item-info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className="item-price">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;