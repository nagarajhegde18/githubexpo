import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex items-center bg-gray-800 rounded-md px-3 py-2 shadow-md w-full max-w-md mx-auto">
      <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        className="bg-transparent outline-none text-white w-full"
        placeholder="Search repositories by name..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        aria-label="Search repositories by name"
      />
    </div>
  );
};

export default SearchBar; 