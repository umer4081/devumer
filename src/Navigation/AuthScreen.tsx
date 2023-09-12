import React from 'react';
import * as Screens from '../ui/index';
import navigationString from '../constants/navigationString';

export default function (Stack: any, isFirstTime: boolean) {
  return (
    <>
      {!isFirstTime && (
        <Stack.Screen
          name={navigationString.ONBOARDING}
          component={Screens.OnBoarding}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name={navigationString.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.SIGNUP}
        component={Screens.Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.OTP_VERIFICATION}
        component={Screens.OTPVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.SELFIEE_SCREEN}
        component={Screens.SelfieeScreen}
        options={{headerShown: false}}
      />
    </>
  );
}
