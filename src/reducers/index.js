import { combineReducers } from 'redux';
import publication from './publication';
import userInfo from './userInfo';

const rootReducers = combineReducers({
  publication,
  userInfo,
});

export default rootReducers;
