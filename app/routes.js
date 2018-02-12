/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TransactionsPage from './containers/TransactionsPage';

export default () => (
  <App>
    <Switch>
      <Route path="/transactions" component={TransactionsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
