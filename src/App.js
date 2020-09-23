import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Basket from "./pages/basket/basket.component";

function App() {
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
