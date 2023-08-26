import React from 'react';
import navigationStrings from '../constants/navigationString';
import * as Screens from '../ui/index';
import DrawerNav from './DrawerNav';
import {CardStyleInterpolators} from '@react-navigation/stack';
export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_HOME}
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.RIDE_TYPE}
        component={Screens.RideType}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.BOOK_CAB}
        component={Screens.BookCab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.RATING_RIDE}
        component={Screens.RatingRide}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={Screens.EditProfile}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}
      />
      <Stack.Screen
        name={navigationStrings.RIDE_HISTORY_DETAIL}
        component={Screens.RideHistoryDetail}
        options={{headerShown: false}}
      />
    </>
  );
}
