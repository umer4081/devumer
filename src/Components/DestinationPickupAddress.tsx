import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Animated,
  Pressable,
} from 'react-native';
import React from 'react';
import PressableImage from './PressableImage';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';

interface DestinationPickupProp {
  icon: ImageSourcePropType;
  text?: string;
  onPress?: () => void;
}

interface DestinationPickupAddressProp {
  addressViewStyle?: StyleProp<ViewStyle>;
  destination?: string;
  pickup?: string;
  onPressPickup?: () => void;
  onPressDestination?: () => void;
  isCross?: boolean;
}

const DestinationPickupAddress = ({
  addressViewStyle,
  destination,
  pickup,
  onPressPickup,
  onPressDestination,
  isCross = true,
}: DestinationPickupAddressProp) => {
  const DestinationPickupview = ({
    icon,
    text,
    onPress,
  }: DestinationPickupProp) => {
    return (
      <Pressable style={styles.destinationPickupView} onPress={onPress}>
        <Image source={icon} />
        <Text numberOfLines={1} style={styles.adressText}>
          {text}
        </Text>
        {isCross && <PressableImage iconSource={imagePath.cross_ic} />}
      </Pressable>
    );
  };
  return (
    <Animated.View
      style={{
        ...styles.addressView,
        ...(typeof addressViewStyle == 'object' && addressViewStyle),
      }}>
      <DestinationPickupview
        icon={imagePath.location_ic}
        text={pickup}
        onPress={onPressPickup}
      />
      <View style={styles.border}>
        <View style={styles.dashedLine}></View>
      </View>
      <DestinationPickupview
        icon={imagePath.navigation_ic}
        text={destination}
        onPress={onPressDestination}
      />
    </Animated.View>
  );
};

export default DestinationPickupAddress;

const styles = StyleSheet.create({
  addressView: {
    backgroundColor: colors.white,
    shadowColor: colors._020202,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScale(2),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
  },
  dashedLine: {
    height: 2,
    borderWidth: 1,
    borderColor: colors._E2E2E2,
    borderStyle: 'dashed',
  },
  border: {
    height: 1,
    overflow: 'hidden',
    marginVertical: moderateScale(8),
    marginLeft: moderateScale(30),
  },
  destinationPickupView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adressText: {
    ...commonStyles.fontSize14,
    color: colors._020202,
    flex: 1,
    lineHeight: textScale(32),
    marginHorizontal: moderateScale(8),
  },
});
