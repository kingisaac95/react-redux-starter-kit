import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

/**
 * @function
 * @returns {method} - create store
 */
export const storeConfig = () => {
  return createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
  );
};
