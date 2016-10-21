import { USERINFO_REQUEST, USERINFO_RECEIVE, USERINFO_FAILURE } from '../constants';

const initialState = {
  userInfo: {
    DisplayName: 'Guest',
  },
  errorMessage: '',
  isFetching: false,
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO_REQUEST:
      return { ...state, userInfo: {
        DisplayName: 'Guest',
      }, isFetching: true };
    case USERINFO_RECEIVE:
      return { ...state, userInfo: action.userInfo, isFetching: false };
    case USERINFO_FAILURE:
      return {
        ...state,
        userInfo: {
          DisplayName: 'Guest',
        },
        isFetching: false,
        errorMessage: action.error.toString(),
      };
    default:
      return state;
  }
};

export default userInfo;
