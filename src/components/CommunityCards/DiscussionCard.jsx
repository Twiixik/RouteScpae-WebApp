// DiscussionCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { IoTimeOutline } from "react-icons/io5";

const DiscussionCard = ({ discussion }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleEditClick = () => {
    navigate(`/community/discussions/edit/${discussion.id}`, { state: { discussion } });
  };

  return (
    <div className="card discussion-card">
      <div className="card-header">
        <img src={discussion.profileImage} alt={discussion.author} className="profile-image" />
        <div>
          <h4>{discussion.author}</h4>
          <p className="post-time-footer"><IoTimeOutline />{discussion.postTime}</p>
        </div>
        <button className="options-button" onClick={handleEditClick}>⋮</button>
      </div>

      <div className="card-body">
        <p>{discussion.discussionContent}</p>
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
          {discussion.likes}
          <FaRegComment style={{ fontSize: '24px', color: 'var(--Forest-Green)' }} /> {discussion.comments}
        </div>
        <FiBookmark className="save-icon" />
      </div>
    </div>
  );
};

export default DiscussionCard;
