import moment from 'moment';
import {showMessage} from 'react-native-flash-message';
import Geolocation from '@react-native-community/geolocation';
import {locationPermission} from './Permission';
import {GeolocationResponse} from '@react-native-community/geolocation';
import actions from '../redux/actions';
import {GOOGLE_MAP_KEY} from '../constants/contant';
import Geocoder from 'react-native-geocoding';
import {currentLocationAddress} from '../redux/actions/currentLocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {Platform} from 'react-native';
const showError = (message: string) => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message: checkAndReturn(message),
  });
};

const showSuccess = (message: string) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message: checkAndReturn(message),
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
  return new Promise<any>(
    (resolve: (res: GeolocationResponse) => void, reject) => {
      locationPermission().then(async res => {
        if (res == 'granted') {
          if (Platform.OS == 'android') {
            await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
              interval: 10000,
              fastInterval: 5000,
            });
          }
          Geolocation.getCurrentPosition(
            res => {
              actions.currentLocation(res.coords);
              resolve(res);
            },
            err => {
              reject(err);
            },
          );
        }
      });
    },
  );
};

export const checkForLocationAddress = (
  latitude: number,
  longitude: number,
) => {
  return new Promise<any>((resolve, reject) => {
    Geocoder.init(GOOGLE_MAP_KEY);
    Geocoder.from(latitude, longitude)
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        var countryCode =
          json.results[0].address_components[
            json.results[0].address_components.length - 2
          ].short_name;
        const data = {
          address: addressComponent,
          countryCode: countryCode,
        };
        currentLocationAddress(data.address);
        resolve(data);
      })
      .catch(error => console.warn(error));
  });
};

export function latLongDelta(pickup: any, destination: any) {
  let longitude = [destination?.longitude, pickup?.longitude],
    latitude = [destination?.latitude, pickup?.latitude];
  let sortedlongitude = longitude.sort(),
    sortedlatitude = latitude.sort();

  let delta = {
    longitudeDelta:
      (sortedlongitude[longitude.length - 1] - sortedlongitude[0]) * 2.8,
    latitudeDelta:
      (sortedlatitude[latitude.length - 1] - sortedlatitude[0]) * 2.3,
  };
  return delta;
}

export function CalculateCenter(pickup: any, destination: any) {
  var latitude = 0,
    longitude = 0;
  const locations = [pickup, destination];
  for (var location of locations) {
    longitude += location.longitude;
    latitude += location.latitude;
  }
  latitude = latitude / locations.length;
  longitude = longitude / locations.length;

  return {
    latitude,
    longitude,
  };
}

export const parsingData = (data: any) => {
  try {
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    return data;
  }
};

const checkAndReturn = (message: any) => {
  try {
    const finalmessage =
      typeof message == 'string' ? message : JSON.stringify(message);
    return finalmessage;
  } catch (error) {
    return message;
  }
};

export const countTime = (totalminutes: any) => {
  totalminutes = Number(totalminutes) ? Number(totalminutes) : 0;

  let hours = Math.floor(totalminutes / 60);
  let minutes = Math.floor(totalminutes % 60);
  return {hours, minutes};
};

export const dropOffTime = (totalminutes: any) => {
  totalminutes = Number(totalminutes) ? Number(totalminutes) : 0;
  const minutes = Date.now() + (totalminutes * 60 * 1000);
  const time = moment(minutes).format('h:mm a');
  return time;
};

export const costOffRide = (data: any) => {
  const amount = (Number(data?.per_km_price) ?? 0) * Number(data?.distance);
  return amount;
};

export {showError, showSuccess};
