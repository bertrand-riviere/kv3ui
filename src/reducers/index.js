import { combineReducers } from 'redux';
import publications from './publications';

const rootReducers = combineReducers({
  publications,
  // Add other reducers here
});

export default rootReducers;
