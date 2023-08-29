import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import types from '../types';

export interface accessTokenDataState {
  data: any;
}
const initialState: accessTokenDataState = {
    data: {},
};

export const accessTokenDataSlice = createSlice({
  name: types.ACCESS_TOKEN_DATA,
  initialState,
  reducers: {
    changeaccessTokenData: (state, action: PayloadAction<boolean>) => {
      const data = action.payload;
      state.data = data;
      return state;
    },
  },
});

export const {changeaccessTokenData} = accessTokenDataSlice.actions;

export default accessTokenDataSlice.reducer;
