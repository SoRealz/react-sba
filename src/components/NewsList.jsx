import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';
import './NewsList.css'; // Import the CSS file

const NewsList = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img src={article.urlToImage} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
