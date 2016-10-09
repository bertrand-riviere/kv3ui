import { combineReducers } from 'redux';
import documents from './documents';

const rootReducers = combineReducers({
  documents,
  // Add other reducers here
});

export default rootReducers;
