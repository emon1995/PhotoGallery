import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Redirect, Route, Switch } from "react-router";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Redirect to="/" from="/home" />
      </Switch>
    </div>
  );
};

export default Body;
