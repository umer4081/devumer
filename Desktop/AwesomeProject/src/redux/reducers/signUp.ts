import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import types from '../types';

export interface signupState {
  name: string;
  email: string;
  password: string;
}
const initialState: signupState = {
  name: '',
  email: '',
  password: '',
};

export const signupSlice = createSlice({
  name: types.SAVE_SIGNUP_DATA,
  initialState,
  reducers: {
    name: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.name = data;
      return state;
    },
    email: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.email = data;
      return state;
    },
    password: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.password = data;
      return state;
    },
  },
});

export const {name, email, password} = signupSlice.actions;

export default signupSlice.reducer;
