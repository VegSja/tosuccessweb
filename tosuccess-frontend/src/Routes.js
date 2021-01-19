import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

//Navbar import
import NavBar from './components/navbar';
import Footer from './components/footer';

//Container imports
import Landing from './containers/landing';
import Stats from './containers/stats';
import Settings from './containers/settings';
import Categories from './containers/categories';
import ActivityComponent from './components/Activity_Page/activity_component';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route exact path="/activities">
            <NavBar />
            <div className="page-container">
              <ActivityComponent />
            </div>
          </Route>
          <Route exact path="/categories">
            <NavBar />
            <div className="page-container">
              <Categories />
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
    </HashRouter>
  );
}