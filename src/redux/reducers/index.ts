import {PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import types from '../types';
import isFirstTime from './isFirstTime';
import auth from './auth';
import bookedCab from './bookedCab';
import rideDetail from './rideDetail';
import currentLocation from './currentLocation';
import accessTokenData from './accessTokenData';

const appReducer = combineReducers({
  isFirstTime,
  auth,
  bookedCab,
  rideDetail,
  currentLocation,
  accessTokenData,
});

const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
