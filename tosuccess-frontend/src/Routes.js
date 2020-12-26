import React from "react";
import { Route, Switch } from "react-router-dom";

//Navbar import
import NavBar from './components/navbar';

//Container imports
import Landing from './containers/landing';
import Activities from './containers/activities';
import Stats from './containers/stats';
import Settings from './containers/settings';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/login">
          <Landing />
        </Route>
        <Route exact path="/activities">
          <NavBar />
          <div className="page-container">
            <Activities />
          </div>
        </Route>
        <Route exact path="/stats">
          <NavBar />
          <div className="page-container">
            <Stats />
          </div>
        </Route>
        <Route exact path="/settings">
          <NavBar />
          <div className="page-container">
            <Settings />
          </div>
        </Route>
    </Switch>
  );
}