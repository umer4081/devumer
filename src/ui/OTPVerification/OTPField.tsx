import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

interface OTPFieldType {
  onChangeOTP?: (res: any) => void;
}
const OTPField = ({onChangeOTP}: OTPFieldType) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeText = (val = '') => {
    val = val.replace(/[^\d]/g, '')
    setValue(val);
    onChangeOTP && onChangeOTP(val);
  };

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={onChangeText}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View key={`cell${index}`} style={styles.cellView}>
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};

export default OTPField;
const styles = StyleSheet.create({
  root: {flex: 1},
  codeFieldRoot: {marginTop: moderateScale(48)},
  cellView: {
    width: moderateScale(48),
    height: moderateScale(56),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors._F7F7F7
  },
  cell: {
    ...commonStyles.fontSize15,
    color: colors._020202,
  },
  focusCell: {
    // borderColor: colors._4D4D4D,
  },
});
