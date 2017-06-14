/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

//create a middleware using the factory function createSagaMiddleware exported by the redux-saga library
const sagaMiddleware = createSagaMiddleware();

// Hooking the Redux devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (() => noop => noop);

// Remember this initialState property argument is really important for SSR
export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run;
  store.asyncSagas = {};

  // Make reducers hot reloadable, check https://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable

  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;   // Babel 6 no longer tries to make ES6 default exports the result of 
                                                      // module.exports. So we need to explicitly specify 'reducerModule.default'
      
      const nextReducers = createReducers(store.asyncReducers);
      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
