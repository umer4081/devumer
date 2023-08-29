import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

interface PressButtonProp {
  title?: string;
  value?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
const PressButton = ({
  title,
  value,
  onPress,
  containerStyle,
}: PressButtonProp) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...(typeof containerStyle == 'object' && containerStyle),
      }}
      onPress={onPress}>
      <Text
        style={{...styles.textStyle, ...(!!value && {color: colors._020202})}}
        numberOfLines={1}>
        {!!value ? value : title}
      </Text>
    </Pressable>
  );
};

export default PressButton;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(56),
    backgroundColor: colors._F7F7F7,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    justifyContent: 'center',
  },
  textStyle: {
    ...commonStyles.fontSize15,
    color: colors._B2B2B2,
    paddingHorizontal: moderateScale(16),
  },
});
