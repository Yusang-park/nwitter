import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Navigation from "./Navigation";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <Home></Home>
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
        <Route exact path="/profile">
          Profile
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
