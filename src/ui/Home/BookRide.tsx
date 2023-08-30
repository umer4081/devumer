import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../constants/navigationString';

interface BookingMenuProp {
  icon: ImageSourcePropType;
  title?: string;
  desc?: string;
  onPress?: () => void;
  backgroundColor?: string;
}

interface NavigationProp {
  openDrawer: () => void;
  closeDrawer: () => void;
  navigate: (res: string, route: any) => void;
}

const BookRide = () => {
  const navigation = useNavigation<NavigationProp>();
  const BookingMenu = ({
    icon,
    title,
    desc,
    onPress,
    backgroundColor = '',
  }: BookingMenuProp) => {
    return (
      <Pressable
        style={{...styles.button, backgroundColor: backgroundColor}}
        onPress={onPress}>
        <Image source={icon} />
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuDesc}>{desc}</Text>
      </Pressable>
    );
  };

  const newRide = () => {
    navigation.navigate(navigationString.RIDE_TYPE, {
      rideType: 'new_ride',
      rideName: 'New Ride',
    });
  };
  const home = () => {
    navigation.navigate(navigationString.RIDE_TYPE, {
      rideType: 'home',
      rideName: 'Home',
    });
  };
  const office = () => {
    navigation.navigate(navigationString.RIDE_TYPE, {
      rideType: 'office',
      rideName: 'Office',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.bookrideText}>{'Book Rides'}</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <BookingMenu
            title="New Ride"
            desc="Put you destination"
            icon={imagePath.new_ride_ic}
            backgroundColor={colors._EEF1FF}
            onPress={newRide}
          />
          <BookingMenu
            title="Home"
            desc="Add location"
            icon={imagePath.home_ic}
            backgroundColor={colors._F5E8C7}
            onPress={home}
          />
          <BookingMenu
            title="Office"
            desc="42 minutes"
            icon={imagePath.office_ic}
            backgroundColor={colors._EFE1D6}
            onPress={office}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default BookRide;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(24),
    marginBottom: moderateScale(32),
  },
  button: {
    height: moderateScale(152),
    width: moderateScale(136),
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(8),
  },
  menuTitle: {
    ...commonStyles.fontBold14,
    color: colors._020202,
    marginTop: moderateScale(8),
    lineHeight: textScale(24),
  },
  menuDesc: {
    ...commonStyles.fontSize13,
    color: colors._020202,
    lineHeight: textScale(24),
  },
  scroll: {
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(16),
  },
  bookrideText: {
    ...commonStyles.fontBold15,
    color: colors._020202,
    marginBottom: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
});
