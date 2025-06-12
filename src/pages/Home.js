import React, { useEffect, useState } from 'react';
import { fetchTrendingRepos, fetchRepoDetails } from '../utils/githubApi';
import RepoCard from '../components/RepoCard';
import FilterBar from '../components/FilterBar';
import ChartSection from '../components/ChartSection';
import RepoModal from '../components/RepoModal';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('stars');
  const [topic, setTopic] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTrendingRepos(language, sort, page, 30);
        setRepos(prevRepos => page === 1 ? data.items : [...prevRepos, ...data.items]);
        setHasMore(data.has_more);
      } catch (err) {
        setError('Failed to fetch repositories. Please try again later.');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, [language, sort, topic, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleRepoClick = async (repo) => {
    try {
      const details = await fetchRepoDetails(repo.owner.login, repo.name);
      setSelectedRepo(details);
    } catch (error) {
      console.error('Error fetching repo details:', error);
      alert('Failed to load repository details. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">GitHub Explorer</h1>
        
        <FilterBar 
          setLanguage={setLanguage} 
          setSort={setSort} 
          setTopic={setTopic}
        />
        
        {loading && page === 1 && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-300">Loading repositories...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900 bg-opacity-50 border border-red-400 text-red-200 px-4 py-3 rounded relative mt-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {repos.map(repo => (
                <div 
                  key={repo.id} 
                  onClick={() => handleRepoClick(repo)}
                  className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
                >
                  <RepoCard repo={repo} />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}

            <ChartSection repos={repos} />
          </>
        )}

        {selectedRepo && (
          <RepoModal
            repo={selectedRepo}
            onClose={() => setSelectedRepo(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home; 