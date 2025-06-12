import React, { useState, useEffect } from 'react';

const RepoCard = ({ repo }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [note, setNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmark = bookmarks.find(b => b.id === repo.id);
    if (bookmark) {
      setIsBookmarked(true);
      setNote(bookmark.note || '');
    }
  }, [repo.id]);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(b => b.id !== repo.id);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
      setNote('');
    } else {
      const newBookmark = {
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        description: repo.description,
        stars: repo.stargazers_count,
        language: repo.language,
        note: note
      };
      localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, newBookmark]));
      setIsBookmarked(true);
    }
  };

  const handleNoteChange = (e) => {
    e.stopPropagation();
    const newNote = e.target.value;
    setNote(newNote);
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmarkIndex = bookmarks.findIndex(b => b.id === repo.id);
    
    if (bookmarkIndex !== -1) {
      bookmarks[bookmarkIndex].note = newNote;
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-white">{repo.name}</h2>
        <button
          onClick={toggleBookmark}
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          {isBookmarked ? '★' : '☆'}
        </button>
      </div>
      
      <p className="text-gray-300 mb-4">{repo.description || 'No description available'}</p>
      
      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
        <span>⭐ {repo.stargazers_count}</span>
        <span>👁️ {repo.watchers_count}</span>
        <span>🔀 {repo.forks_count}</span>
      </div>
      
      {repo.language && (
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-gray-300">{repo.language}</span>
        </div>
      )}
      
      {isBookmarked && note && (
        <div className="mt-4 p-3 bg-gray-700 bg-opacity-50 rounded-md">
          <p className="text-gray-300 text-sm">{note}</p>
        </div>
      )}
      
      {isBookmarked && !note && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowNoteInput(true);
          }}
          className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Add Note
        </button>
      )}
      
      {showNoteInput && (
        <div className="mt-4" onClick={e => e.stopPropagation()}>
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Add a note..."
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows="3"
          />
          <button
            onClick={() => setShowNoteInput(false)}
            className="mt-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default RepoCard; 