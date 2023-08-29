import {changeaccessTokenData} from '../reducers/accessTokenData';
import store from '../store';
const {dispatch} = store;

export const accessTokenData = (data: any) => {
  dispatch(changeaccessTokenData(data));
};
