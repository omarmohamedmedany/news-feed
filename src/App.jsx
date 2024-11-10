import React, { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example fetch and display articles
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=eg&q=general&apiKey=YOUR_API_KEY");
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch articles.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>Articles:</h1>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
