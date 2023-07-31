import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthScreen from './AuthScreen';
import MainStack from './MainStack';
import {_navigator} from './navigationServices';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector((state: any) => state.auth.userData);
  const isFirstTime = useSelector(
    (state: any) => state.isFirstTime.isFirstTime,
  );

  return (
    <NavigationContainer ref={_navigator}>
      <Stack.Navigator>
        {!userData?.access_token ? (
          <>{MainStack(Stack)}</>
        ) : (
          <>{AuthScreen(Stack, isFirstTime)}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
