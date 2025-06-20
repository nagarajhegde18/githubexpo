import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(\"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\")' }}>
        <div className="min-h-screen bg-black bg-opacity-75">
          <div className="flex flex-col min-h-screen">
            <header className="py-6 px-4 flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-white">GitHub Explorer</Link>
              <nav>
                <Link to="/" className="text-white hover:text-blue-400 transition-colors mr-4">Home</Link>
                <Link to="/bookmarks" className="text-white hover:text-blue-400 transition-colors">Bookmarks</Link>
              </nav>
            </header>
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
              </Routes>
            </main>
            <footer className="py-4 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} GitHub Explorer. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
