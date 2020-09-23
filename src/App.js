import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Basket from "./pages/basket/basket.component";

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

