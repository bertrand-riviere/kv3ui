import { combineReducers } from 'redux';
import publication from './publication';

const rootReducers = combineReducers({
  publication,
  // Add other reducers here
});

export default rootReducers;
