import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => true
});

import rootReducer from './redux/reducers';
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
