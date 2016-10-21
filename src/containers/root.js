import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// Use a local index.less file so that we can use a locally deployed version of the icon font
// See https://ant.design/components/icon/
// (links to https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)
// We would simply import 'antd/dist/antd.less' otherwise
// TODO: Check with Nico how some assets content could get deployed in the build folder during debug
import '../assets/index.less';

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
