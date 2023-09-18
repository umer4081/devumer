import {name, email, password} from '../reducers/signUp';
import store from '../store';
const {dispatch} = store;

export const firstname = (data: any) => {
  dispatch(name(data));
};
export const firstemail = (data: any) => {
  dispatch(email(data));
};
export const firstPassword = (data: any) => {
  dispatch(password(data));
};
