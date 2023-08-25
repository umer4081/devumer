import {changebookedCab} from '../reducers/bookedCab';
import store from '../store';
const {dispatch} = store;

export const bookedCab = (data: any) => {
  dispatch(changebookedCab(data));
};
