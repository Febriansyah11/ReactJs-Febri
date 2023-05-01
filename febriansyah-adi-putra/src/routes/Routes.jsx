import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from '../components/Welcome';
import '../assets/style/styles.css'
import '../assets/style/component.css'
import Dashboard from '../components/Dashboard';
import Header from '../components/Header'
export default function Routes() {

    return (
        <Router>

            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route path="/dashboard">
                    <div className="d-flex flex-column">
                        <Header />
                        <Dashboard />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}
