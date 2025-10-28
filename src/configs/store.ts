import rootReducers from '@/src/store/reducers';
import rootSagas from '@/src/store/sagas';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

// Note: network middleware from 'react-native-offline' removed due to missing dependency.

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    middlewares.push(sagaMiddleware);
    return middlewares;
  },
//   devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
