import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/home";

import Orders from "../src/orders/Orders";
import Navbar from "./Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
            </Switch>
            <Switch>
                <Route path="/home">  
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;