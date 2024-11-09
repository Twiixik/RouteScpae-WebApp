// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Trips from './pages/Trips';
import CommunityPage from './pages/Community/CommunityPage';
import CreateDailyPostPage from './pages/Community/CreateDailyPostPage';
import EditDailyPostPage from './pages/Community/EditDailyPostPage';
import CreateArticlePage from './pages/Community/CreateArticlePage';
import EditArticlePage from './pages/Community/EditArticlePage';
import CreateDiscussionPage from './pages/Community/CreateDiscussionPage';
import EditDiscussionPage from './pages/Community/EditDiscussionPage';

function App() {
  return (
    <div className="app-container">
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community/*" element={<CommunityPage />} />

          {/* Daily Post Routes */}
          <Route path="/community/create-daily-post" element={<CreateDailyPostPage />} />
          <Route path="/community/dailyposts/edit/:id" element={<EditDailyPostPage />} />
          {/* Article Routes */}
          <Route path="/community/create-article" element={<CreateArticlePage />} />
          <Route path="/community/articles/edit/:id" element={<EditArticlePage />} />

          {/* Discussion Routes */}
          <Route path="/community/create-discussion" element={<CreateDiscussionPage />} />
          <Route path="/community/discussions/edit/:id" element={<EditDiscussionPage />} />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default App;
