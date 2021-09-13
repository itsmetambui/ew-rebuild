import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard';
import { SigninPage } from '../pages/signin';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashboardPage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
      </Switch>
    </Router>
  );
};
