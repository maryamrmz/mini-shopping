import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Basket from "./pages/Basket";

import "./App.css";

const App = () => {
    useEffect(() => {
        return () => {
            // Init Materialize JS
            Materialize.AutoInit();
        };
    }, []);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/basket' component={Basket} />
            </Switch>
        </div>
    );
};

export default App;
