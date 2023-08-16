import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";

export const Content = () => {
    return (
        <Switch>
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/store' component={Store} />
            <Route exact path='/' component={Login} />
        </Switch>

    )
}