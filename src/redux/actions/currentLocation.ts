import {changecurrentLocation, changecurrentLocationAddress} from '../reducers/currentLocation';
import store from '../store';
const {dispatch} = store;

export const currentLocation = (data: any) => {
  dispatch(changecurrentLocation(data));
};

export const currentLocationAddress = (data: any) => {
    dispatch(changecurrentLocationAddress(data));
  };
