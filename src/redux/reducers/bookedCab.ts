import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import types from '../types';

export interface bookedCabState {
  data: any;
}
const initialState: bookedCabState = {
  data: {},
};

export const bookedCabSlice = createSlice({
  name: types.BOOKED_CAB,
  initialState,
  reducers: {
    changebookedCab: (state, action: PayloadAction<boolean>) => {
      const data = action.payload;
      state.data =data
      return state;
    },
  },
});

export const {changebookedCab} = bookedCabSlice.actions;

export default bookedCabSlice.reducer;
