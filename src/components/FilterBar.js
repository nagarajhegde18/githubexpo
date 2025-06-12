import React from 'react';

const FilterBar = ({ setLanguage, setSort, setTopic }) => {
  const languages = [
    'All',
    'JavaScript',
    'Python',
    'Java',
    'TypeScript',
    'C++',
    'Go',
    'Ruby',
    'PHP',
    'C#'
  ];

  const topics = [
    'All',
    'web',
    'react',
    'node',
    'python',
    'machine-learning',
    'javascript',
    'typescript',
    'api',
    'database'
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-6 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Language
          </label>
          <select
            onChange={(e) => setLanguage(e.target.value === 'All' ? '' : e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sort By
          </label>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="updated">Recently Updated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Topic
          </label>
          <select
            onChange={(e) => setTopic(e.target.value === 'All' ? '' : e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 