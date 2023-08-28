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
import {getFirstTime, getUserData} from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const init = async () => {
    // requestUserPermission();
    // notificationListener();
    getFirstTime().then(res => {
      if (res) {
        actions.isFirstTime(res);
      }
    });
    const userData: any = await getUserData();
    if (!!userData?.access_token) {
      saveUserData(userData);
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
