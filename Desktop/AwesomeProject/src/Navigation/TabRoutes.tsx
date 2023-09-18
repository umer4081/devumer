import React, {useEffect, useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Image, Keyboard, StyleSheet, View, Alert} from 'react-native';
import * as Screens from '../ui/index';
import {moderateScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import navigationStrings from '../constants/navigationString';
import {_navigator} from './navigationServices';
const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {

  return (
    <BottomTab.Navigator
      tabBar={tabsProps => {
        return (
              <BottomTabBar {...tabsProps} />
          )
      }}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderRadius: moderateScale(32),
          borderTopWidth: 0,
        },
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: item => {
            return (
              <View>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: item => {
            return (
             <></>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  activebuttonname: {
    ...commonStyles.fontBold14,
    color: colors.blackShad,
  },
  inactivebuttonname: {
    ...commonStyles.fontBold14,
    color: colors.blackShad,
  },
  linearGradient: {
    height: moderateScale(64),
    position: 'absolute',
    marginHorizontal: moderateScale(24),
    borderRadius: moderateScale(32),
    justifyContent: 'center',
    width: moderateScale(328),
    bottom: moderateScale(16),
    overflow: 'hidden',
  },
  blurStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: moderateScale(32),
  },
});

export default TabRoutes;
