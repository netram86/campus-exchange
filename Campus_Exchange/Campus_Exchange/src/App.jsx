import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Navbar from './Components/Navbar';
import Home from './Pagess/Home';
import Listings from './Pagess/Listings';
import ItemDetail from './Pagess/ItemDetail';
import PostItem from './Pagess/PostItem';
import Profile from './Pagess/Profile';
import './App.css';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <AppProvider>
      <Router {...router}>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/post-item" element={<PostItem />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;