// ArticleCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { IoTimeOutline } from "react-icons/io5";

const ArticleCard = ({ article }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate(); // Use navigate for routing

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleEditClick = () => {
    navigate(`/community/articles/edit/${article.id}`, { state: { article } });
  };

  return (
    <div className="card article-card">
      <div className="card-header">
        <img src={article.profileImage} alt={article.author} className="profile-image" />
        <div>
          <h4>{article.author}</h4>
        </div>
        <button className="options-button" onClick={handleEditClick}>⋮</button>
      </div>

      <div className="card-body">
        <h3>{article.articleTitle}</h3>
        <h4 className="post-time-footer"><IoTimeOutline />{article.readTime}</h4>
        <p>{article.articleSnippet}</p>
      </div>
      
      <div className="card-image">
        <img src={article.articleImage} alt={article.articleTitle} />
      </div>

      <div className="card-footer">
        <div className="actions">
          {isLiked ? (
            <FaHeart
              onClick={handleHeartClick}
              style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}
            />
          ) : (
            <FaRegHeart
              onClick={handleHeartClick}
              style={{ color: 'var(--Forest-Green)', fontSize: '24px', cursor: 'pointer' }}
            />
          )}
          {article.likes}
          <FaRegComment style={{ fontSize: '24px', color: 'var(--Forest-Green)' }} /> {article.comments}
        </div>
        <button className="read-more" onClick={handleEditClick}>Read more</button>
      </div>
    </div>
  );
};

export default ArticleCard;
