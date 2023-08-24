import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import {moderateScale, width} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import BlueButton from '../../Components/BlueButton';

interface OfferItemProp {
  item: any;
  index: number;
}

const couponCodeColor = [
  '#E7252C',
  '#25D2E7',
  '#E7B425',
  '#7BC470',
  '#D666C6',
  '#4EBCCC',
  '#AACA72',
  '#E08B42',
];

const OfferItem = ({item, index}: OfferItemProp) => {
  const currentColor = couponCodeColor[(index % couponCodeColor.length)];
  return (
    <View
      style={{
        ...styles.container,
        ...((index + 1) % 2 == 0 && {marginLeft: moderateScale(8)}),
      }}>
      <Text style={styles.couponCodeText}>{'Coupon code'}</Text>
      <View style={{marginVertical: moderateScale(8)}}>
        <Text style={{...styles.couponCode, color: currentColor}}>
          {'RED5'}
        </Text>
        <Text style={{...styles.couponCodedetailText, color: currentColor}}>
          {'Get $5.00 discount'}
        </Text>
      </View>
      <Text style={styles.discountText}>{'Discount for first 3 rides'}</Text>
      <BlueButton
        buttonTitle="Claim Now"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default OfferItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors._E2E2E2,
    width: (width - moderateScale(56)) / 2,
    marginBottom: moderateScale(8),
    padding: moderateScale(16),
    borderRadius: moderateScale(6),
  },
  couponCodeText: {
    ...commonStyles.fontSize12,
    color: colors._A2A2A2,
    textTransform: 'uppercase',
  },
  button: {
    height: moderateScale(32),
  },
  buttonText: {
    ...commonStyles.fontSizeMedium12,
    color: colors.white,
  },
  discountText: {
    ...commonStyles.fontSize12,
    color: colors._7C7C7C,
    marginBottom: moderateScale(16),
  },
  couponCode: {
    ...commonStyles.fontBold20,
  },
  couponCodedetailText: {
    ...commonStyles.fontSize13,
  },
});
