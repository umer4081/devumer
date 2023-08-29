import * as auth from './auth';
import * as isFirstTime from './isFirstTime';
import * as bookedCab from './bookedCab';
import * as rideDetail from './rideDetail';
import * as currentLocation from './currentLocation';
import * as accessTokenData from './accessTokenData';


export default {
  ...auth,
  ...isFirstTime,
  ...bookedCab,
  ...rideDetail,
  ...currentLocation,
  ...accessTokenData
};
