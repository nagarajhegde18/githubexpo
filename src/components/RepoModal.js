import React from 'react';

const RepoModal = ({ repo, onClose }) => {
  if (!repo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{repo.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
              <p className="text-gray-400">{repo.description || 'No description available'}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-700 bg-opacity-50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Stars</p>
                <p className="text-xl font-semibold text-white">{repo.stargazers_count}</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Forks</p>
                <p className="text-xl font-semibold text-white">{repo.forks_count}</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Watchers</p>
                <p className="text-xl font-semibold text-white">{repo.watchers_count}</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Open Issues</p>
                <p className="text-xl font-semibold text-white">{repo.open_issues_count}</p>
              </div>
            </div>

            {repo.language && (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Language</h3>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="text-gray-400">{repo.language}</span>
                </div>
              </div>
            )}

            {repo.topics && repo.topics.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Links</h3>
              <div className="space-y-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View on GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Last Updated</h3>
              <p className="text-gray-400">
                {new Date(repo.updated_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoModal; 