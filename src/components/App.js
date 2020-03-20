import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Capitulos from "./capitulos/index";
import Personajes from "./personajes/index";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Personajes} />
        <Route exact path="/personaje/:id" component={Personajes} />
        <Route path="/capitulos/:id" exact component={Capitulos} />
        <Route path="/capitulos" exact component={Capitulos} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
