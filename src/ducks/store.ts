import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducers,
  applyMiddleware(logger, ...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;