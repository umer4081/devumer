import * as urls from '../../config/urls';
import {
  apiGet,
  apiPost,
  apiPut,
  clearUserData,
  setUserData,
} from '../../utils/utils';
import {changeAuth} from '../reducers/auth';
import store from '../store';
import types from '../types';
import {isFirstTime} from './isFirstTime';

const {dispatch} = store;
export const saveUserData = (data: any) => {
  dispatch(changeAuth(data));
};

export function onBoarding() {
  return apiGet(urls.ONBOARDING);
}

export function socialLogin(data: any) {
  return new Promise<void>((resolve, reject) => {
    apiPost(urls.SOCIAL_LOGIN, data)
      .then((res: any) => {
        setUserData(res.data).then((check: any) => {
          if (res?.data?.is_profile_setup) {
            saveUserData(res.data);
          }
          resolve(res);
        });

        return resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
