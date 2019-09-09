import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Votacao from "./pages/Votacao";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Login} />
    <Route path="/votacao" component={Votacao} />
  </BrowserRouter>
);

export default Routes;
