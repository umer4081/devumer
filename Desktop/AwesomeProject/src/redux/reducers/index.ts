import {PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import types from '../types';
import isFirstTime from './isFirstTime';
import auth from './auth';
import signUp from './signUp';
import savemessage from './savemessage';

const appReducer = combineReducers({
  isFirstTime,
  auth,
  signUp,
  savemessage,
});

const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
