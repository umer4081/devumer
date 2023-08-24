import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from '../ui/index';
import navigationString from '../constants/navigationString';
import CustomDrawer from '../Components/CustomDrawer';
import {moderateScale} from '../styles/responsiveSize';
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const screenOption = {headerShown: false};
  return (
    <Drawer.Navigator
      initialRouteName={navigationString.HOME}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: moderateScale(231),
        },
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={navigationString.HOME}
        component={Screens.Home}
        options={screenOption}
      />
      <Drawer.Screen
        name={navigationString.NOTIFICATION}
        component={Screens.Notification}
        options={screenOption}
      />
      <Drawer.Screen
        name={navigationString.OFFERS}
        component={Screens.Offers}
        options={screenOption}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
