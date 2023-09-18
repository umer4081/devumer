import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../ui/index';

export default function (Stack: any, isFirstTime: boolean) {
  return (
    <>
      {!isFirstTime && (
        // <Stack.Screen
        //   name={'navigationStrings'}
        //   component={Screens.OnBoarding}
        //   options={{headerShown: false}}
        // />

        <Stack.Screen
          name={navigationString.SIGNUP}
          component={Screens.Signup}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name={navigationString.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationString.HOME}
        component={Screens.Home}
        options={{headerShown: false}}
      />
    </>
  );
}
