import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

interface SocialButtonPropType {
  buttonTitle?: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon: ImageSourcePropType;
}
const SocialButton = ({
  buttonTitle,
  buttonStyle,
  textStyle,
  onPress,
  icon,
}: SocialButtonPropType) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(typeof buttonStyle == 'object' && buttonStyle),
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image source={icon} />
      <Text
        style={{
          ...styles.textStyle,
          ...(typeof textStyle == 'object' && textStyle),
        }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    height: moderateScale(56),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors._E2E2E2,
    flexDirection:'row',
    paddingHorizontal:moderateScale(24),
    marginTop:moderateScale(16),
  },
  textStyle: {
    ...commonStyles.fontSize15,
    color: colors._020202,
    flex: 1,
    textAlign:'center'
  },
});
