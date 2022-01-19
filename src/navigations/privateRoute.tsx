import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from 'views/private/Home';
import Desktop from 'views/private/Desktop';
import Mobile from 'views/private/Mobile';
import Support from 'views/private/Support';
import AssetManager from 'views/private/AssetManager';
import Invoices from 'views/private/Invoices';
import Account from 'views/private/Account';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/website" component={Desktop} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/support" component={Support} />
      <Route path="/asset-manager" component={AssetManager} />
      <Route path="/invoices" component={Invoices} />
      <Route path="/account" component={Account} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
