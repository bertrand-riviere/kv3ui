import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import publication from './publication';

const rootReducers = combineReducers({
  publication,
  routing,
});

export default rootReducers;
