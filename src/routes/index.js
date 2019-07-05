import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../containers/Home/Home";
import About from "../containers/About/About";

export default () =>(<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
</Switch>);