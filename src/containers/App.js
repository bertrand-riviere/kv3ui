import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Nav from '../views/nav';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        <Row>
          <Col span={24}><Nav /></Col>
        </Row>
        <Row>
          <Col span={24}><br /><br /></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={20}>{children}</Col>
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
