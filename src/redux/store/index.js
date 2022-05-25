import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import languageReducer from '../reducer/reducerLanguage';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
