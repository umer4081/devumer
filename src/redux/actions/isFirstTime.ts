import {changeIsFirstTime} from '../reducers/isFirstTime';
import store from '../store';
const {dispatch} = store;

export const isFirstTime = (data: any) => {
  dispatch(changeIsFirstTime(data));
};
