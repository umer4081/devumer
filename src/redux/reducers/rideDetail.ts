import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import types from '../types';

export interface rideDetailState {
  data: any;
}
const initialState: rideDetailState = {
  data: {},
};

export const rideDetailSlice = createSlice({
  name: types.RIDE_DETAIL,
  initialState,
  reducers: {
    changerideDetail: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      state.data = data;
      return state;
    },
  },
});

export const {changerideDetail} = rideDetailSlice.actions;

export default rideDetailSlice.reducer;
