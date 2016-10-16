import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import 'antd/dist/antd.less';

import App from './App';
import Publication from './publication';
import Admin from '../views/admin';

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Publication} />
          <Route path="/admin" component={Admin} />
        </Route>
      </Router>
    </LocaleProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
