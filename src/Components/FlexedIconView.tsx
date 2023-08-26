import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../styles/responsiveSize';
interface FlexedIconViewProp {
  children: JSX.Element | JSX.Element[];
  icon: ImageSourcePropType;
  conatinerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const FlexedIconView = ({
  children,
  icon,
  conatinerStyle,
  imageStyle,
}: FlexedIconViewProp) => {
  return (
    <View
      style={{
        ...styles.conatiner,
        ...(typeof conatinerStyle == 'object' && conatinerStyle),
      }}>
      <Image
        source={icon}
        style={{
          ...styles.icon,
          ...(typeof imageStyle == 'object' && imageStyle),
        }}
      />
      {children}
    </View>
  );
};

export default FlexedIconView;

const styles = StyleSheet.create({
  icon: {
    height: 16,
    width: 16,
    marginRight: moderateScale(8),
  },
  conatiner: {
    flexDirection: 'row',
  },
});
