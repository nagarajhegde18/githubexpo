import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchTrendingRepos = async (language = '', sort = 'stars', page = 1, perPage = 30) => {
  const query = `q=stars:>100${language ? `+language:${language}` : ''}&sort=${sort}&order=desc&page=${page}&per_page=${perPage}`;
  const response = await axios.get(`${BASE_URL}/search/repositories?${query}`);
  return {
    items: response.data.items,
    total_count: response.data.total_count,
    has_more: response.data.items.length === perPage
  };
};

export const fetchRepoDetails = async (owner, repo) => {
  const [repoDetails, readme] = await Promise.all([
    axios.get(`${BASE_URL}/repos/${owner}/${repo}`),
    axios.get(`${BASE_URL}/repos/${owner}/${repo}/readme`, {
      headers: {
        Accept: 'application/vnd.github.html+json'
      }
    })
  ]);

  return {
    ...repoDetails.data,
    readme: readme.data
  };
};

export const fetchPopularTopics = async () => {
  const response = await axios.get(`${BASE_URL}/search/repositories?q=stars:>1000&sort=stars&order=desc&per_page=100`);
  const topics = new Set();
  response.data.items.forEach(repo => {
    if (repo.topics) {
      repo.topics.forEach(topic => topics.add(topic));
    }
  });
  return Array.from(topics).slice(0, 20); // Return top 20 topics
}; 