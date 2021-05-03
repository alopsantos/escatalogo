import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashabord";
import Catalogo from "../pages/Catalogo";
import CreateCatalogo from "../pages/CreateCatalogo";
import Produtos from "../pages/Produtos";
import Brand from "../pages/Brand";
import Testecomponentes from "../pages/TesteComponentes";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/catalogo/:id?" component={Catalogo} />
    <Route path="/produtos" component={Produtos} />
    <Route path="/criarcatalogo" component={CreateCatalogo} />
    <Route path="/marca" component={Brand} />
    <Route path="/testes" exact component={Testecomponentes} />
  </Switch>
);

export default Routes;
