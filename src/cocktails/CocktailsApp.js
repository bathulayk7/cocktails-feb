import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { SingleCocktail } from "./pages/SingleCocktail";
import "./style.css";
export const CocktailsApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>

      </Switch>
    </Router>
  );
};
