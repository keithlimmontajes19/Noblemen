import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Login from 'views/public/Login';
import Signup from 'views/public/Signup';
import ForgotPassword from 'views/public/ForgotPassword';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Navigation;
