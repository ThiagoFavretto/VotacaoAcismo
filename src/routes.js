import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Votacao from './pages/Votacao';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route
        path="/votacao"
        component={() =>
          localStorage.getItem('token') ? <Votacao /> : <Redirect to="/" />
        }
      />
    </BrowserRouter>
  );
};

export default Routes;
