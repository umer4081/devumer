import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

interface BlueButtonPropType {
  buttonTitle?: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const BlueButton = ({
  buttonTitle = 'Continue',
  buttonStyle,
  textStyle,
  onPress,
  disabled = false,
}: BlueButtonPropType) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.button,
        ...(typeof buttonStyle == 'object' && buttonStyle),
        ...(disabled && {backgroundColor: colors._B2B2B2}),
      }}
      activeOpacity={0.8}
      onPress={onPress}>
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

export default BlueButton;

const styles = StyleSheet.create({
  button: {
    height: moderateScale(56),
    backgroundColor: colors._3B4FF4,
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    ...commonStyles.fontSizeMedium15,
    color: colors.white,
  },
});
