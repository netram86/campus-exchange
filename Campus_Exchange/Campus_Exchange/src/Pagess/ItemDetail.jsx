import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { items, user } = useAppContext();
  
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div className="item-not-found">Item not found</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-image-section">
          <img 
            src={item.image}
            alt={item.title} 
            className="item-detail-image"
          />
        </div>
        <div className="item-info-section">
          <h1 className="item-detail-title">{item.title}</h1>
          <div className="item-meta">
            <span className="item-category-badge">{item.category}</span>
            <span className="item-price">${item.price}</span>
          </div>
          
          <p className="item-description">{item.description}</p>
          
          <div className="seller-info">
            <h3 className="seller-label">Seller</h3>
            <p className="seller-name">{item.seller}</p>
          </div>
          
          {user && user.username !== item.seller && (
            <button className="contact-seller-button">
              Contact Seller
            </button>
          )}
          
          {user && user.username === item.seller && (
            <div className="seller-actions">
              <button className="edit-button">
                Edit
              </button>
              <button className="delete-button">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;