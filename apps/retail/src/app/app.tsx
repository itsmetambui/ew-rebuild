import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard';
import { SigninPage } from '../pages/signin';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DashboardPage />
      </Route>
      <Route path="/signin">
        <SigninPage />
      </Route>
    </Switch>
  );
};
