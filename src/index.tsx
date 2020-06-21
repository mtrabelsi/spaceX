import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import watchFetchTasksSaga from './state/saga/fetchSaga';
import rootReducer from './state/redux/reducer'
import { fetchStarted } from './state/redux/actions';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchFetchTasksSaga);

type Empty = {}
const MainApp : React.FC<Empty> = () => {
    store.dispatch(fetchStarted())
    return <div>Hello TSX and JSX!</div>
} 

ReactDom.render(
    <MainApp />
    , 
    document.getElementById('root-elm')
)