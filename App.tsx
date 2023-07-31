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
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {cameraPermission, storagePermission} from './src/utils/Permission';

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
    }
  };
  useEffect(() => {
    cameraPermission();
    storagePermission();
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 3000);
    // init();
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'pink',
      secondary: 'yellow',
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Routes />
          <FlashMessage
            style={{...commonStyles.fontSize14, marginTop: moderateScale(40)}}
            position="top"
            animated
          />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
