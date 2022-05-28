import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

export default function AppRouter() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route exact path="/" element={<Home />} />
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
