import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();
  },
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
