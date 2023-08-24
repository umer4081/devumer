import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from './WrapperContainer';
import {moderateScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import PressableImage from './PressableImage';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import navigationString from '../constants/navigationString';

interface MenuProp {
  source: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

const url =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80';
const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
  const Menu = ({source, title = '', onPress}: MenuProp) => {
    return (
      <Pressable
        onPress={onPress}
        style={styles.menuContainer}
        hitSlop={{top: 10, bottom: 10}}>
        <Image source={source} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    );
  };

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const notification = () => {
    navigation.navigate(navigationString.NOTIFICATION);
  };

  const home = () => {
    navigation.navigate(navigationString.HOME);
  };

  const offers = () => {
    navigation.navigate(navigationString.OFFERS);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.headView}>
          <PressableImage
            iconSource={{uri: url}}
            containerStyle={styles.profileImage}
            imageStyle={styles.imageStyle}
          />
          <Pressable style={styles.iconView} onPress={closeDrawer}>
            <View style={styles.shadowView}>
              <Image source={imagePath.menu_close_ic} />
            </View>
          </Pressable>
        </View>
        <Menu source={imagePath.side_home_ic} title="Home" onPress={home} />
        <Menu source={imagePath.profile_ic} title="My Profile" />
        <Menu source={imagePath.history_ic} title="Ride History" />
        <Menu source={imagePath.offers_ic} title="Offers" onPress={offers} />
        <Menu
          source={imagePath.notification_ic}
          title="Notifications"
          onPress={notification}
        />
        <Menu source={imagePath.support_ic} title="Help & Support" />
        <Menu source={imagePath.logout_ic} title="Logout" />
      </View>
    </WrapperContainer>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateScale(12),
    // paddingHorizontal: moderateScale(24),
  },
  menuContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(40),
    paddingHorizontal: moderateScale(24),
  },
  title: {
    ...commonStyles.fontSize20,
    color: colors._020202,
    marginLeft: moderateScale(16),
  },
  profileImage: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(48),
    overflow: 'hidden',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(24),
  },
  iconView: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(48),
    overflow: 'hidden',
    shadowColor: colors._020202,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  shadowView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 0.5,
    borderRadius: moderateScale(48),
  },
});
