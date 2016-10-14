import React from 'react';
import { render } from 'react-dom';
import Kv3Store from './store/kv3Store';
import Root from './containers/root';

render(
  <Root store={Kv3Store} />,
  document.getElementById('root')
);
