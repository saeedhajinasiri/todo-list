import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
