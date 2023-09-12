import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {accessTokenData} from './accessTokenData';
import {isFirstTime} from './isFirstTime';
import {Platform} from 'react-native';

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
        setUserData(res).then((check: any) => {
          if (res) {
            saveUserData(res);
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

export function socialLoginSignUp(data: any) {
  return new Promise<void>((resolve, reject) => {
    apiPost(urls.SOCIAL_LOGIN, data)
      .then((res: any) => {
        setUserData(res).then((check: any) => {
          resolve(res);
        });
        return resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function phonelogin(data: any) {
  return apiPost(urls.LOGIN, data);
}

export function resendOTP(data: any) {
  return apiPost(urls.RESEND_OTP, data);
}

export function otpVerification(data: any) {
  return new Promise<void>((resolve, reject) => {
    apiPost(urls.OTP_VERIFICATION, data)
      .then((res: any) => {
        setUserData(res).then((check: any) => {
          if (res) {
            saveUserData(res);
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

export function accessTokenLogin() {
  return new Promise<void>((resolve, reject) => {
    apiGet(urls.ACCESS_TOKEN_LOGIN)
      .then((res: any) => {
        accessTokenData(res);
        return resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const logoutClearData = () => {
  dispatch({type: types.CLEAR_REDUX_STATE, payload: {}});
  clearUserData();
};

export function listCabsNear(query: string = '') {
  return apiGet(urls.LIST_TEAMS_NEAR + query);
}

export function requestNewRide(data: any) {
  return apiPost(urls.ADD_CUSTOMER_NEW_RIDE, data);
}

export function jobDetail(query: string = '') {
  return apiGet(urls.JOB_DETAIL + query);
}

export const updateDeviceToken = async () => {
  try {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    const deviceType = Platform.OS == 'android' ? 'ANDROID' : 'IOS';
    const apiData = {
      current_device_token: fcmToken,
      current_device_type: deviceType,
    };
    fcmToken && (await apiPost(urls.UPDATE_DEVICE_TOKEN, apiData));
  } catch (error) {
    console.log(error, 'errorerrorUPDATE_DEVICE_TOKENerrorerrorerror');
  }
};
