import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashabord";
import Catalogo from "../pages/Catalogo";
import Produtos from "../pages/Produtos";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/catalogo" component={Catalogo} />
    <Route path="/produtos" component={Produtos} />
  </Switch>
);

export default Routes;
