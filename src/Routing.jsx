import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="feed" element={<FeedPage />} />
    </Routes>
  );
}

export default Routing;
