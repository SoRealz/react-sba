import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';
import './NewsList.css'; // Import the CSS file

const NewsList = () => {
  const dispatch = useDispatch(); // Initialize dispatch function to dispatch actions to the Redux store
  const { articles, status, error } = useSelector((state) => state.news); // Extract articles, status, and error from the Redux store using useSelector hook

  useEffect(() => {
    // Fetch news articles when component mounts or whenever dispatch function changes
    dispatch(fetchNews());
  }, [dispatch]);

  // Render loading state while fetching data
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Render error message if fetching data fails
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Render news articles
  return (
    <div className="news-container">
      {/* Map over articles array and render individual news cards */}
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img src={article.urlToImage} alt={article.title} /> {/* Display news image */}
          <h2>{article.title}</h2> {/* Display news title */}
          <p>{article.description}</p> {/* Display news description */}
          <a href={article.url}>Read more</a> {/* Display link to read more */}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
