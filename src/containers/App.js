import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import publicationActionCreators from '../actions/publicationActionCreators';
import Publication from './publication';

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;
    const componentToBeDisplayed = children === null ? (<Publication />) : (<div>{children}</div>);

    return (
      componentToBeDisplayed
    )
  }
}

export default connect()(App)
