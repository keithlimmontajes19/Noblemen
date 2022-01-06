import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from 'views/private/Home';
import Desktop from 'views/private/Desktop';
import Mobile from 'views/private/Mobile';
import Support from 'views/private/Support';
import AssetManager from 'views/private/AssetManager';
import Invoices from 'views/private/Invoices';
import Account from 'views/private/Account';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/website" element={<Desktop />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/support" element={<Support />} />
      <Route path="/asset-manager" element={<AssetManager />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Navigation;
