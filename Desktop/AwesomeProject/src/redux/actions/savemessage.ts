import {addMessage} from '../reducers/savemessage';
import store from '../store';
const {dispatch} = store;

export const addmessage = (data: any) => {
  dispatch(addMessage(data));
};
