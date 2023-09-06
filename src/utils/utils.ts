import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';
import {parsingData} from './helperFunction';

const {dispatch, getState} = store;

export async function getHeaders() {
  let userData: any = await AsyncStorage.getItem('userData');

  if (userData) {
    userData = JSON.parse(userData);
    // console.log(`${userData.access_token}`)
    console.log(userData?.access_token, 'access_tokenaccess_tokenaccess_token');
    return {
      authorization: `${userData?.access_token}`,
    };
  }
  return {};
}

type Methods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';
export async function apiReq(
  endPoint = '',
  data = {},
  method: Methods,
  headers = {},
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, {headers})
      .then((result: any) => {
        const {data} = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error: any) => {
        console.log(error,"errorerrorerrorerrorerrorerrorerror");
        console.log(
          error && error.response,
          'the error respne',
        );

        if (error && error.response && error.response?.status === 403) {
          clearUserData();
          // NavigationService.resetNavigation();
          //NavigationService.navigate('loginUsingEmailScreen');
          dispatch({
            type: types.CLEAR_REDUX_STATE,
            payload: {},
          });
          dispatch({
            type: types.NO_INTERNET,
            payload: {internetConnection: true},
          });
        }
        if (error && error.response && typeof error.response?.data == 'string') {
          return rej(error.response?.data );
        }

        if (error && error.response && error.response?.data) {
          if (!error.response.data?.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint = '', data?: any, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint = '', data?: any, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(
  endPoint = '',
  data?: any,
  headers = {},
  requestOptions?: any,
) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint = '', data?: any, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key: string, data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key: string) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorage() {
  return AsyncStorage.clear();
}

export function setUserData(data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export function setFirstTime(data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('isFirstTime', data);
}

export async function getFirstTime() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('isFirstTime').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.multiRemove(['userData', 'lastRideStatus']);
}


export function saveLastRideStatus(data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('lastRideStatus', data);
}

export async function getLastRideStatus() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('lastRideStatus').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

