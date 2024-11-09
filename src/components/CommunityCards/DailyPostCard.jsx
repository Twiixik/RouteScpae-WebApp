// DailyPostCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { FiBookmark } from 'react-icons/fi';
import { IoTimeOutline } from "react-icons/io5";

const DailyPostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/community/dailyposts/edit/${post.id}`, { state: { post } });
  };

  return (
    <div className="card daily-post-card">
      <div className="card-header">
        <img src={post.profileImage} alt={post.username} className="profile-image" />
        <div className="user-info">
          <h4>{post.username} <span className="verified-icon"><MdVerified /></span></h4>
        </div>
        <button className="options-button" onClick={handleEditClick}>⋮</button>
      </div>

      <div className="card-image">
        <img src={post.postImage} alt={post.postCaption} />
      </div>

      <div className="card-body">
        <p><strong>@{post.username}</strong> {post.postCaption}</p>
      </div>

      <div className="card-footer">
        <div className="actions">
          {isLiked ? (
            <FaHeart
              className="heart-icon"
              onClick={() => setIsLiked(!isLiked)}
              style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}
            />
          ) : (
            <FaRegHeart
              className="heart-icon"
              onClick={() => setIsLiked(!isLiked)}
              style={{ color: 'var(--Forest-Green)', fontSize: '24px', cursor: 'pointer' }}
            />
          )}
          {post.likes}
          <FaRegComment className="comment-icon" style={{ fontSize: '24px', color: 'var(--Forest-Green)' }} />
          {post.comments}
        </div>
        <FiBookmark className="save-icon" />
      </div>

      <button className="view-comments">View all comments</button>

      <div className="add-comment">
        <img src={post.profileImage} alt="Your Profile" className="profile-image-small" />
        <input type="text" placeholder="Add a comment..." />
      </div>

      <p className="post-time-footer"><IoTimeOutline />{post.postTime}</p>
    </div>
  );
};

export default DailyPostCard;
