import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from 'views/public/Login';
import Signup from 'views/public/Signup';
import ForgotPassword from 'views/public/ForgotPassword';
import ChangePassword from 'views/public/ChangePassword';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route exact path="/change-password" component={ChangePassword} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
