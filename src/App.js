import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Basket from "./pages/Basket";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
    useEffect(() => {
        return () => {
            // Init Materialize JS
            M.AutoInit();
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
}

export default App;
