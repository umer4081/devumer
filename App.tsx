import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Routes from './src/Navigation/Routes';
import actions from './src/redux/actions';
import {saveUserData} from './src/redux/actions/auth';
import store from './src/redux/store';
import commonStyles from './src/styles/commonStyles';
import {moderateScale} from './src/styles/responsiveSize';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/notificationServices';
import {getFirstTime, getLastRideStatus, getUserData} from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen';
import {_navigator} from './src/Navigation/navigationServices';
import navigationString from './src/constants/navigationString';

const App = () => {
  const init = async () => {
    requestUserPermission();
    notificationListener();
    getFirstTime().then(res => {
      if (res) {
        actions.isFirstTime(res);
      }
    });
    const userData: any = await getUserData();
    if (!!userData?.access_token) {
      saveUserData(userData);
      checkPastRide();
    }
  };

  const checkPastRide = async () => {
    const data: any = await getLastRideStatus();
    if (data && data?.isSearching) {
      let query = `?id=${data?.id}`;
      const jobData: any = await actions.jobDetail(query);
      const secondDiff = (Date.now() - data?.time);
      console.log(secondDiff,"secondDiffsecondDiffsecondDiffsecondDiff")
      if (secondDiff < 120000 && jobData?.status == 'UPCOMING') {
        actions.rideDetail(data?.rideDetail);
        setTimeout(() => {
          _navigator.navigate(navigationString.BOOK_CAB, {
            rideName: data?.rideName,
            isChoosed:true
          });
        }, 300);
      } else if (jobData?.status != 'ENDED' && jobData?.status != 'UPCOMING') {
        actions.bookedCab(jobData);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    init();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessage
          style={{...commonStyles.fontSize14, marginTop: moderateScale(40)}}
          position="top"
          animated
        />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
