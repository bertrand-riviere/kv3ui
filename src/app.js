import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Kv3Store from './store/kv3Store';
import Root from './containers/root';

const history = syncHistoryWithStore(browserHistory, Kv3Store);

render(
  <Root store={Kv3Store} history={history} />,
  document.getElementById('root')
);
