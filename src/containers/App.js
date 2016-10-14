import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Nav from '../views/nav';
import Publication from './publication';

class App extends Component {

  render() {
    const { children } = this.props;

    const componentToBeDisplayed = _.isNull(children) ? (<Publication />) : (<div>{children}</div>);

    return (
      <div>
        <Nav />
        <br />
        {componentToBeDisplayed}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
