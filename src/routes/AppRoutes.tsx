import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "views/SignUp/SignUp";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
