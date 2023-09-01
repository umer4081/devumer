// src/redux/reducers/SavedOptions.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SavedMessage {
  option: {answer: string};
}

interface SavedOptionsState {
  messages: {[key: string]: SavedMessage[]};
}

const initialState: SavedOptionsState = {
  messages: {},
};

const addmessagesSlice = createSlice({
  name: 'SAVED_OPTIONS',
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<{key: string; data: SavedMessage[]}>,
    ) => {
      const {key, data} = action.payload;
      state.messages[key] = data;
    },
  },
});

export const {addMessage} = addmessagesSlice.actions;
export default addmessagesSlice.reducer;

// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import types from '../types';

// interface SavedMessage {
//   option: {answer: string};
// }

// interface SavedOptionsState {
//   messages: {[key: string]: SavedMessage[]};
// }

// const initialState: SavedOptionsState = {
//   messages: {},
// };

// const addmessagesSlice = createSlice({
//   name: types.SAVED_OPTIONS,
//   initialState,
//   reducers: {
//     addMessage: (
//       state,
//       action: PayloadAction<{key: string; data: SavedMessage[]}>,
//     ) => {
//       const {key, data} = action.payload;
//       state.messages[key] = data;
//     },
//   },
// });

// export const {addMessage} = addmessagesSlice.actions;
// export default addmessagesSlice.reducer;
