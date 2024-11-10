import React, { useState, useEffect } from 'react';
import NewsFeed from './components/NewsFeed';
import NewsHeader from './components/NewsHeader';
import { Typography } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(''); // For search text input
  const [category, setCategory] = useState('general'); // For the category filter
  const [page, setPage] = useState(1); // Page number for pagination
  

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading state when starting the fetch request
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${query}&page=${page}&apiKey=YOUR_API_KEY`);
        const data = await response.json();

        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          throw new Error(`Error: ${data.code}, Details: ${data.message}`);
        }
      } catch (err) {
        setError('Failed to fetch articles.');
      }
      setLoading(false); // Set loading state to false after fetching data
    }

    fetchData();
  }, [query, category, page]); // Trigger fetch when query, category, or page changes

  const handleCategoryChange = (event) => {
    setCategory(event.target.value); // Update category state
    setPage(1); // Reset to first page when category changes
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value); // Update search query
    setPage(1); // Reset to first page when query changes
  };

  return (
    <div>
      <NewsHeader
        category={category}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      
      {/* Show loading or error message */}
      {loading ? (
        <Typography variant="h5">Loading...</Typography>
      ) : error ? (
        <Typography variant="h5" color="error">{error}</Typography>
      ) : (
        <NewsFeed articles={articles} />
      )}
    </div>
  );
}

export default App;
