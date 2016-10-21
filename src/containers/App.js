import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Nav from '../views/nav';

class App extends Component {
  render() {
    const { children } = this.props;

    const stylePage = {
      background: '#ececec',
    };

    const styleHeader = {
      background: '#fff',
      marginBottom: 24,
    };

    const styleMain = {
      background: '#fff',
      overflow: 'hidden',
      position: 'relative',
      width: '92%',
      margin: '0 auto',
      borderRadius: 6,
      padding: '24 0 0',
      marginBottom: 24,
    };

    const styleFooter = {
      background: '#fff',
    };

    const styleInnerFooter = {
      marginTop: '5px',
      marginLeft: '2%',
    };

    return (
      <div style={stylePage}>
        <header style={styleHeader}>
          <Row>
            <Col span={24}><Nav /></Col>
          </Row>
          </header>
          <div style={styleMain}>
            <Row type="flex" justify="center">
              <Col span={20}>
                <br /><br />{children}<br /><br /><br /><br />
              </Col>
            </Row>
          </div>
          <footer style={styleFooter}>
            <Row>
              <Col span={24} style={styleInnerFooter}>
                <ul>
                  <li>
                    For any questions please contact
                    { " " }
                    <a href="mailto:KAPPAPOTeam@oecd.org">KappaPOTeam@oecd.org</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
