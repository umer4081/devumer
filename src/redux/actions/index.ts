import * as auth from './auth';
import * as isFirstTime from './isFirstTime';
import * as bookedCab from './bookedCab';
import * as rideDetail from './rideDetail';
import * as currentLocation from './currentLocation';


export default {
  ...auth,
  ...isFirstTime,
  ...bookedCab,
  ...rideDetail,
  ...currentLocation
};
