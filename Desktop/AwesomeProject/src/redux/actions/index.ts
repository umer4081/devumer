import * as signUp from './signUp';
import * as auth from './auth';
import * as isFirstTime from './isFirstTime';
import * as ChatState from './savemessage';

export default {
  ...auth,
  ...isFirstTime,
  ...signUp,
  ...ChatState,
};
