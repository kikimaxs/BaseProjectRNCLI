import { combineReducers } from '@reduxjs/toolkit';
import app from './app';
import loading from './loading';
import errors from './errors';

const rootReducers = combineReducers({
  app,
  loading,
  errors,
});

export default rootReducers;
