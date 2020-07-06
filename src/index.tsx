import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootSaga from './state/saga/fetchSaga';
import rootReducer from './state/redux/reducer';
import MainApp from './app';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

ReactDom.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root-elm'),
);
