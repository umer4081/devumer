import React from 'react';
import navigationStrings from '../constants/navigationString';
import * as Screens from '../ui/index';
import DrawerNav from './DrawerNav';
export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_HOME}
        component={DrawerNav}
        options={{headerShown: false}}
      />
    </>
  );
}
