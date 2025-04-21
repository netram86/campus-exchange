import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const mockItems = [
        {
          id: 1,
          title: 'Textbook: Computer Science 101',
          description: 'Like new condition, barely used',
          price: 25,
          category: 'Books',
          seller: 'john_doe',
          image: 'https://5.imimg.com/data5/CX/RD/GLADMIN-4755675/cs-basics-book-500x500.png'
        },
        {
          id: 2,
          title: 'Bicycle',
          description: 'Good condition, needs new tires',
          price: 80,
          category: 'Transportation',
          seller: 'jane_smith',
          image: 'https://tse2.mm.bing.net/th?id=OIP.j59_CD9-4XQP7h_l5psNeQAAAA&pid=Api&P=0&h=180'
        },
        {
          id: 3,
          title: 'Premium Juicer',
          description: 'High-quality juicer perfect for making fresh fruit and vegetable juices. Great for healthy living!',
          price: 79.99,
          category: 'Kitchen Appliances',
          seller: 'health_enthusiast',
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323690cv11d.jpg'
        },
        {
          id: 4,
          title: 'Bluetooth Speaker',
          description: 'High-quality portable speaker with great bass and clear sound. Perfect for dorm rooms or outdoor activities.',
          price: 45.99,
          category: 'Electronics',
          seller: 'music_lover',
          image: 'https://tse3.mm.bing.net/th?id=OIP.C7zqY7kA1mllspShUhnBLgHaG1&pid=Api&P=0&h=180'
        },
        {
          id: 5,
          title: 'HC Verma Physics Book',
          description: 'Concepts of Physics by HC Verma, excellent condition',
          price: 35,
          category: 'Books',
          seller: 'physics_student',
          image: 'https://www.mpdbooks.in/wp-content/uploads/2020/05/DD-1.jpg'
        },
        {
          id: 6,
          title: 'School Water Bottle',
          description: 'High-quality water bottle, perfect for daily use',
          price: 15,
          category: 'Accessories',
          seller: 'eco_friendly',
          image: 'https://homafy.com/wp-content/uploads/2023/03/school-water-bottle-1536x1536.jpeg'
        },
        {
          id: 7,
          title: 'School Backpack',
          description: 'Spacious and durable school bag with multiple compartments',
          price: 40,
          category: 'Accessories',
          seller: 'bag_dealer',
          image: 'https://tse4.mm.bing.net/th?id=OIP.oQo7pTWxgVCg3JIoA-nWHwHaHa&pid=Api&P=0&h=180'
        }
      ];
      setItems(mockItems);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1, seller: user.username }]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={{ 
      items, 
      user, 
      loading, 
      error, 
      login, 
      logout, 
      addItem,
      fetchItems
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);