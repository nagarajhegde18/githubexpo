import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-cover bg-center bg-fixed" 
           style={{
             backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
           }}>
        <div className="bg-black bg-opacity-75 min-h-screen">
          <nav className="bg-gray-900 bg-opacity-90 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    GitHub Explorer
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/bookmarks" 
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Bookmarks
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
