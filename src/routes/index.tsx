import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashabord";
import Catalogo from "../pages/Catalogo";
import CreateCatalogo from "../pages/CreateCatalogo";
import Produtos from "../pages/Produtos";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/catalogo" component={Catalogo} />
    <Route path="/produtos" component={Produtos} />
    <Route path="/criarcatalogo" component={CreateCatalogo} />
  </Switch>
);

export default Routes;
