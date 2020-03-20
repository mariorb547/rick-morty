import React,{useState,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Capitulos from "./capitulos/index";
import Personajes from "./personajes/index";
import Prueba from "./capitulos/Post"
import axios from "axios";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Personajes} />
        <Route exact path="/personajes/:id" component={Personajes} />
        <Route path="/capitulos/:id" exact component={Capitulos} />
         <Route path="/capitulos" exact component={Capitulos} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
</BrowserRouter>);

export default App;
