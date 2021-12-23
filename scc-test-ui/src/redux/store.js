import { createStore, combineReducers } from 'redux/es/redux.mjs';

import rootReducer from './rootReducer';

export const store = createStore(
  combineReducers({rootReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
