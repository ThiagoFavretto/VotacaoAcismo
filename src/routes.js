import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Votacao from './pages/Votacao';
import Podio from './pages/Podio';
import End from './pages/End';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={End} />
      {/* <Route
        path="/votacao"
        exact
        component={() =>
          localStorage.getItem('token') ? <Votacao /> : <Redirect to="/" />
        }
      />
      <Route
        path="/votacao/resultado"
        exact
        component={() =>
          localStorage.getItem('token') ? <Podio /> : <Redirect to="/" />
        }
      />
      <Route
        path="/votacao/end"
        exact
        component={() =>
          localStorage.getItem('token') ? <End /> : <Redirect to="/" />
        }
      /> */}
    </BrowserRouter>
  );
};

export default Routes;
