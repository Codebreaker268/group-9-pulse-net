// src/components/Forum.js
import React, { useState } from 'react';

function Forum() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch news articles from the NewsAPI
  const fetchNewsArticles = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setArticles(data); // Use the data directly
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news articles:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Forum - Latest News</h1>
      <button onClick={fetchNewsArticles}>Get Latest News</button>

      {loading && <p>Loading news...</p>}

      {articles.length > 0 && (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}

      {articles.length === 0 && !loading && <p>No articles to display.</p>}
    </div>
  );
}

export default Forum;