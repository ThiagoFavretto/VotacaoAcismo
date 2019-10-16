import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Votacao from './pages/Votacao';
import Podio from './pages/Podio';
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
      <Route path="/podio/08596/resultados" component={Podio} />
    </BrowserRouter>
  );
};

export default Routes;
