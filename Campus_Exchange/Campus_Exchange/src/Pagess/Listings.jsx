import { useAppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
import './Listings.css';

const Listings = () => {
  const { items } = useAppContext();

  return (
    <div className="container">
      <div className="listings-page">
        <div className="listings-header">
          <h1>Browse Items</h1>
          <p>Find what you need from our community marketplace</p>
        </div>

        <div className="listings-grid">
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
      </div>
    </div>
  );
};

export default Listings;
