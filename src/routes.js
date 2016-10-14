import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Admin from './views/admin';


// TODO: Use react-router (not react-router-redux)
export default <Route path="/" component={App}>
  <Route path="/admin" component={Admin} />
</Route>;
