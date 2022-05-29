import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

export default function AppRouter({ isLogin }) {
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

AppRouter.propTypes = {
  isLogin: PropTypes.bool,
};

AppRouter.defaultProps = {
  isLogin: null,
};
