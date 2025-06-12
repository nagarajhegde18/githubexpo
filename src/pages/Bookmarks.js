import React, { useState, useEffect } from 'react';
import RepoCard from '../components/RepoCard';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(savedBookmarks);
  }, []);

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter(b => b.id !== id);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Bookmarked Repositories</h1>
        
        {bookmarks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No bookmarked repositories yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map(bookmark => (
              <div key={bookmark.id}>
                <RepoCard repo={bookmark} />
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className="mt-2 text-red-600 hover:text-red-700"
                >
                  Remove Bookmark
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks; 