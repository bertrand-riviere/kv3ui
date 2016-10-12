import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Admin from './views/admin';

export default <Route path="/" component={App}>
  <Route path="/admin" component={Admin} />
</Route>;
