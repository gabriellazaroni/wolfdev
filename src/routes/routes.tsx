import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';

// It's only for test
import BottomSection from '../pages/Landing/BottomSection';

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app*" element={<BottomSection />} />
    </Routes>
  );
}

export default GlobalRoutes;
