import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../views/nav';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        <Nav />
        <br />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
