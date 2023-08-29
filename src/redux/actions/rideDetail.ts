import {changerideDetail} from '../reducers/rideDetail';
import store from '../store';
const {dispatch} = store;

export const rideDetail = (data: any) => {
  dispatch(changerideDetail(data));
};
