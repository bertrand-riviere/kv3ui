import { USERINFO_REQUEST, USERINFO_RECEIVE, USERINFO_FAILURE } from '../constants';
import userInfoAPI from '../api/userInfoAPI';

const userInfoActionCreators = {
  fetchUserInfo() {
    return (dispatch) => {
      dispatch({ type: USERINFO_REQUEST });

      userInfoAPI.fetchUserInfo().then(
        (userInfo) => dispatch({ type: USERINFO_RECEIVE, userInfo }),
        (error) => dispatch({ type: USERINFO_FAILURE, error })
      );
    };
  },
};

export default userInfoActionCreators;
