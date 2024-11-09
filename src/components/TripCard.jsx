// TripCard.jsx
import React from 'react';
import { FaRegClock, FaBed, FaUserFriends } from 'react-icons/fa';

const TripCard = ({ imageUrl, title, price, description, days, included, availability }) => {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={imageUrl} alt={title} />
        <span className="trip-status">Starting Soon</span>
      </div>
      <div className="trip-content">
        <div className="trip-header">
          <h4>{title}</h4>
          <span className="trip-price">{price}</span>
        </div>
        <p className="trip-description">{description}</p>
        <div className="trip-details">
          <span><FaRegClock /> {days} days</span>
          <span><FaBed /> {included}</span>
          <span><FaUserFriends /> {availability} Available</span>
          <button className="see-more">See more</button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
