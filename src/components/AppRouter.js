import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from './Navigation';
import Profile from '../routes/Profile';

export default function AppRouter({ isLogin }) {
  return (
    <BrowserRouter>
      {isLogin && <Navigation />}
      <Routes>
        {isLogin ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

AppRouter.propTypes = {
  isLogin: PropTypes.bool,
};

AppRouter.defaultProps = {
  isLogin: null,
};
