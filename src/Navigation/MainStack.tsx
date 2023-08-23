import React from 'react';
import navigationStrings from '../constants/navigationString';
import * as Screens from '../ui/index';
import TabRoutes from './TabRoutes';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
}
