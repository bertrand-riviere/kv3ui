import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// const logger = (store) => (next) => (action) => {
const logger = () => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('dispatching:', action);
  }
  return next(action);
};

const Kv3Store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);

export default Kv3Store;
