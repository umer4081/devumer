import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthScreen from './AuthScreen';
import MainStack from './MainStack';
import {_navigator} from './navigationServices';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector((state: any) => state.auth.userData);
  const isFirstTime = useSelector(
    (state: any) => state.isFirstTime.isFirstTime,
  );

  return (
    <NavigationContainer ref={_navigator}>
      {/* <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {!!userData?.access_token ? (
          <>{MainStack(Stack)}</>
        ) : (
          <>{AuthScreen(Stack, isFirstTime)}</>
        )}
      </Stack.Navigator> */}
      <DrawerNav />
    </NavigationContainer>
  );
}
