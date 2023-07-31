import React from 'react';
import * as Screens from '../ui/index';
import navigationString from '../constants/navigationString';

export default function (Stack: any, isFirstTime: boolean) {
  return (
    <>
      {!isFirstTime && (
        <Stack.Screen
          name={'navigationStrings'}
          component={Screens.OnBoarding}
          options={{headerShown: false}}
        />
      )}
    </>
  );
}
