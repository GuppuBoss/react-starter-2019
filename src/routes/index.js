import React from "react";
import {Route, Switch} from "react-router-dom";
import { Home, About } from "../pages";
import { NotFound } from '../components';

const routes = () =>(<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route component={NotFound} />
</Switch>);
export default routes;