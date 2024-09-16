import React, { useState } from 'react';
import './Forum.css'; // Ensure you have corresponding CSS for styling

function Forum() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNewsArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7b2e0a7e22654066baa8374fa8d7c856');
      if (!response.ok) throw new Error('Failed to fetch news articles');
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError('Error fetching news articles');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forum-container">
      <h1>Forum - Latest News</h1>
      <button onClick={fetchNewsArticles}>Get Latest News</button>

      {loading && <p>Loading news...</p>}
      {error && <p className="error-message">{error}</p>}

      {articles.length > 0 && (
        <ul className="article-list">
          {articles.map((article, index) => (
            <li key={index} className="article-item">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      )}

      {articles.length === 0 && !loading && !error && <p>No articles to display.</p>}
    </div>
  );
}

export default Forum;
