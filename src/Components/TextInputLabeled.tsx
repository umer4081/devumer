import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

interface TextInputLabeledPropType extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}
const TextInputLabeled = ({
  containerStyle,
  inputStyle,
  ...rest
}: TextInputLabeledPropType) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(typeof containerStyle == 'object' && containerStyle),
      }}>
      <TextInput
        placeholderTextColor={colors._B2B2B2}
        style={{
          ...styles.inputTextStyle,
          ...(typeof inputStyle == 'object' && inputStyle),
        }}
        {...rest}
      />
    </View>
  );
};

export default TextInputLabeled;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(56),
    backgroundColor: colors._F7F7F7,
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  inputTextStyle: {
    ...commonStyles.fontSize15,
    color: colors._020202,
    height: '100%',
    paddingHorizontal: moderateScale(16),
    flex: 1,
  },
});
