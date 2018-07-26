import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import CelsiusToKelvin from "./components/celsiusToKelvin";
import KelvinToCelsius from "./components/kelvinToCelsius";
import NotFound from "./components/notFound";

const Routes = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        Temperature Converter
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Celsius to Kelvin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/toCelsius">
                                    Kelvin To Celsius
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={CelsiusToKelvin} />
                    <Route path="/toCelsius" component={KelvinToCelsius} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
