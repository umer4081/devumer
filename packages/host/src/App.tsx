import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);
const App = () => {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 100})}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
