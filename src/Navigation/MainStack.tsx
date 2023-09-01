import React from 'react';
import navigationStrings from '../constants/navigationString';
import * as Screens from '../ui/index';
import TabRoutes from './TabRoutes';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.SELECTION}
        component={Screens.Selection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.QUESTION}
        component={Screens.Question}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.NUMBEROFQUES}
        component={Screens.NumberofQues}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.ANSWERS}
        component={Screens.Answers}
        options={{headerShown: false}}
      />
    </>
  );
}
