import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import userInfoActionCreators from '../actions/userInfoActionCreators';

class UserInfo extends Component {

  componentDidMount() {
    this.props.fetchUserInfo();
  }

  render() {
    const { userInfo } = this.props;

    let componentToBeDisplayed;
    if (userInfo.isFetching) {
      componentToBeDisplayed = <Icon type="loading" />;
    } else if (userInfo.errorMessage !== '') {
      componentToBeDisplayed = <div>!</div>;
    } else {
      componentToBeDisplayed = <div>{userInfo.userInfo.DisplayName}</div>;
    }

    return (
      componentToBeDisplayed
    );
  }
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    userInfo: PropTypes.shape({
      DisplayName: PropTypes.string.isRequired,
    }).isRequired,
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: () => dispatch(userInfoActionCreators.fetchUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
