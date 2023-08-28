import moment from 'moment';
import {showMessage} from 'react-native-flash-message';
import Geolocation from '@react-native-community/geolocation';
import {locationPermission} from './Permission';
import { GeolocationResponse } from '@react-native-community/geolocation';

const showError = (message: string) => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showSuccess = (message: string) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

export function otpTimerCounter(seconds: number) {
  // alert(seconds)
  let m: any = Math.floor(seconds / 60);
  let s: any = seconds % 60;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${m}:${s}`;
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: any;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const getCurrentLocation = () => {
  return new Promise<any>((resolve:(res:GeolocationResponse)=>void, reject) => {
    locationPermission().then(res => {
      if (res == 'granted') {
        Geolocation.getCurrentPosition(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          },
        );
      }
    });
  });
};

export {showError, showSuccess};
