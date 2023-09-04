import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import {Dropdown} from 'react-native-element-dropdown';
const data = [
  {label: 'Cash', value: 'Cash'},
  {label: 'Online', value: 'Online'},
];

const PayTypeSelector = () => {
  const [value, setValue] = useState('Cash');
  return (
    <Pressable style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemStyle}
        itemContainerStyle={styles.itemContainerStyle}
        renderLeftIcon={() => <Image source={imagePath.money_ic} />}
        renderRightIcon={() => (
          <Image source={imagePath.down_arrow_ic} style={{marginRight: 8}} />
        )}
        data={data}
        activeColor={colors._3B4FF4}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={value}
        value={value}
        onChange={valData => {
          setValue(valData?.value)
        }}
      />
    </Pressable>
  );
};

export default PayTypeSelector;

const styles = StyleSheet.create({
  cashText: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
    width: moderateScale(48),
    marginLeft: moderateScale(8),
    marginRight: moderateScale(4),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    width: moderateScale(120),
    height: moderateScale(56),
  },
  dropdown: {
    width: moderateScale(120),
    height: 16,
  },
  icon: {},
  placeholderStyle: {
    ...commonStyles.fontSizeMedium13,
    color: colors.theme,
    textAlign: 'right',
  },
  itemStyle: {
    ...commonStyles.fontSizeMedium14,
    color: colors._020202,
  },
  itemContainerStyle: {
    // height:
    padding: 0,
  },
  selectedTextStyle: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
    width: moderateScale(48),
    marginLeft: moderateScale(8),
    marginRight: moderateScale(4),
  },
});
