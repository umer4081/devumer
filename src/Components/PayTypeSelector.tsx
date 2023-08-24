import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';

const PayTypeSelector = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={imagePath.money_ic} />
      <Text style={styles.cashText}>Cash</Text>
      <Image source={imagePath.down_arrow_ic} />
    </Pressable>
  );
};

export default PayTypeSelector;

const styles = StyleSheet.create({
  cashText: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
    width: moderateScale(48),
    marginLeft:moderateScale(8),
    marginRight:moderateScale(4),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
