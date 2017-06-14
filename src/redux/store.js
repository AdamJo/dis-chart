import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

const enhancers = compose(
  applyMiddleware(createLogger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

let initialState;

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, initialState);
} else {
  store = createStore(rootReducer, initialState, enhancers);
}

export default initialState => {
  return store;
};
