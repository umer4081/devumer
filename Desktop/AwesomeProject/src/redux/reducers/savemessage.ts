import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface savemessage {
  id: string;
  text: string;
  // messages: savemessage[];
}

interface Message {
  messages: Message[];
}

const initialState: Message = {
  // id: '',
  // text: '',
  messages: [],
};

const addmessagesSlice = createSlice({
  name: 'save_messaag',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const {addMessage} = addmessagesSlice.actions;
export default addmessagesSlice.reducer;
