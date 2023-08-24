import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthScreen from './AuthScreen';
import {_navigator} from './navigationServices';
import MainStack from './MainStack';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function Routes() {
  const userData = useSelector((state: any) => state.auth.userData);
  const isFirstTime = useSelector(
    (state: any) => state.isFirstTime.isFirstTime,
  );
  return (
    <NavigationContainer ref={_navigator}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {!!userData?.access_token
          ? MainStack(Stack)
          : AuthScreen(Stack, isFirstTime)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
