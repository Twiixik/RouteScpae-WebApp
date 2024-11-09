import React, { useState } from 'react';
import { FaHistory, FaBookmark, FaBell, FaEye } from 'react-icons/fa';
import { BiStats } from "react-icons/bi";
import { FiLogOut } from 'react-icons/fi';
import { LuCalendarClock } from "react-icons/lu";

const ProfilePage = () => {
  const [isPushNotificationsOn, setIsPushNotificationsOn] = useState(true);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  return (
    <div className="profile-page-wrapper">
      {/* Background Image with Profile Picture */}
      <div
        className="background-image"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664358190027-02c373b2b0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYWR0cmlwfGVufDB8fDB8fHww')",
        }}
      >
        <div className="profile-picture">
          <img src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60" alt="Profile" />
        </div>
      </div>

      {/* Profile Page Content */}
      <section className="profile-page">
        {/* Profile Header */}
        <div className="profile-header">
          <h1>Oliver Svensson</h1>
          <p>@roadtripking85</p>
          <p className="bio">
            Hi! I'm Oliver 🚗 Based in Sweden, I am a road-trip enthusiast, passionate about exploring hidden gems and carefully planning every aspect of my trips. Feel free to send a message 👋
          </p>
        </div>

        {/* User Stats */}
        <div className="user-stats">
          <div>
            <strong>13</strong> <span>Posts</span>
          </div>
          <div>
            <strong>21</strong> <span>Trips</span>
          </div>
          <div>
            <strong>178</strong> <span>Followers</span>
          </div>
          <div>
            <strong>220</strong> <span>Following</span>
          </div>
        </div>

        {/* Profile Buttons */}
        <div className="profile-buttons">
          <button className="edit-profile-button">Edit Profile</button>
          <button className="share-profile-button">Share Profile</button>
        </div>

        {/* Details Section */}
        <div className="details-section">
          <div className="details-item">
            <BiStats /> <span>Trip Stats</span> <span className="arrow">›</span>
          </div>
          <div className="details-item">
            <FaHistory /> <span>Trip History</span> <span className="arrow">›</span>
          </div>
          <div className="details-item">
            <FaBookmark /> <span>Saved</span> <span className="arrow">›</span>
          </div>
          <div className="details-item">
            <LuCalendarClock /> <span>Upcoming Trips</span> <span className="arrow">›</span>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="preferences-section">
          <div className="preferences-item">
            <FaBell /> <span>Push Notifications</span>
            <label className="switch">
              <input type="checkbox" checked={isPushNotificationsOn} onChange={() => setIsPushNotificationsOn(!isPushNotificationsOn)} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="preferences-item">
            <FaEye /> <span>Account Visibility</span>
            <label className="switch">
              <input type="checkbox" checked={isAccountVisible} onChange={() => setIsAccountVisible(!isAccountVisible)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Logout Button */}
        <button className="logout-button">
          <FiLogOut /> Logout
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
