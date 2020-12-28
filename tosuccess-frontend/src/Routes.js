import React from "react";
import { Route, Switch } from "react-router-dom";

//Navbar import
import NavBar from './components/navbar';

//Container imports
import Landing from './containers/landing';
import Stats from './containers/stats';
import Settings from './containers/settings';
import ActivityComponent from './components/activity_component';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/landing">
          <Landing />
        </Route>
        <Route exact path="/activities">
          <NavBar />
          <div className="page-container">
            <ActivityComponent />
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