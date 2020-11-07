import React from "react";
import { Route, Switch } from "react-router-dom";

//Container imports
import Activities from './containers/activities';
import Stats from './containers/stats';
import Settings from './containers/settings';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/activities">
          <Activities />
        </Route>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
    </Switch>
  );
}