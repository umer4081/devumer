import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import types from '../types';

export interface currentLocationState {
  data: any;
  address: string;
}
const initialState: currentLocationState = {
  data: {},
  address: '',
};

export const currentLocationSlice = createSlice({
  name: types.CURRENT_LOCATION,
  initialState,
  reducers: {
    changecurrentLocation: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      state.data = data;
      return state;
    },
    changecurrentLocationAddress: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      state.address = data;
      return state;
    },
  },
});

export const {changecurrentLocation,changecurrentLocationAddress} = currentLocationSlice.actions;

export default currentLocationSlice.reducer;
