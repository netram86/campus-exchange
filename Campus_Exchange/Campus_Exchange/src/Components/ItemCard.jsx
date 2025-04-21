import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="item-card">
      <div className="item-image-container">
        <img 
          src={imageError ? '/default-item.jpg' : (item.image || '/default-item.jpg')}
          alt={item.title} 
          className="item-image"
          onError={handleImageError}
        />
      </div>
      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">${item.price}</span>
          <Link to={`/item/${item.id}`} className="view-button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;