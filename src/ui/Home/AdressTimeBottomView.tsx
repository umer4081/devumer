import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import actions from '../../redux/actions';

const AdressTimeBottomView = ({isRideCompleted = true}) => {

    const cancelRide =()=>{
        actions.bookedCab(false)
    }

  return (
    <View style={styles.bottomView}>
      {isRideCompleted ? (
        <View>
          <View style={styles.adressLineView}>
            <Image source={imagePath.location_ic} />
            <Text style={styles.address}>
              SCO 50-51, Sector 34B, Sector 34, Chandigarh…
            </Text>
          </View>
          <View style={styles.cashPriceView}>
            <View style={styles.amountView}>
              <Image source={imagePath.cash_ic} />
              <Text style={styles.amount}>$2.98</Text>
            </View>
            <Text style={styles.cashText}>Cash</Text>
          </View>
        </View>
      ) : (
        <>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.clock_ic} />
              <View style={{marginLeft: moderateScale(16)}}>
                <Text style={styles.time}>1:29 pm</Text>
                <Text style={styles.dropoffText}>Drop-off time</Text>
              </View>
            </View>
            <View style={styles.countView}>
              <Text style={styles.rideTime}>
                <Text style={styles.boldCount}>1</Text>hrs
                <Text style={styles.boldCount}>10</Text>min
              </Text>
            </View>
          </View>
          <Text style={styles.canceltextStyle} onPress={cancelRide}>Cancel</Text>
        </>
      )}
    </View>
  );
};

export default AdressTimeBottomView;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: colors.white,
    padding: moderateScale(24),
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },
  time: {
    ...commonStyles.fontBold15,
    color: colors._020202,
  },
  dropoffText: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight: textScale(24),
  },
  canceltextStyle: {
    ...commonStyles.fontSizeMedium15,
    color: colors._D30E09,
    textAlign: 'center',
    marginVertical: moderateScale(24),
    lineHeight: textScale(24),
  },
  rideTime: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
  },
  boldCount: {
    ...commonStyles.fontSize48,
    color: colors._020202,
    lineHeight: textScale(52),
  },
  address: {
    ...commonStyles.fontSize14,
    color: colors._020202,
    lineHeight: textScale(32),
    marginLeft: moderateScale(16),
  },
  countView: {},
  adressLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  cashText: {
    ...commonStyles.fontSize13,
    color: colors._A2A2A2,
    marginLeft:moderateScale(40)
  },
  amount: {
    ...commonStyles.fontSizeMedium14,
    color: colors._020202,
    lineHeight: textScale(32),
    marginLeft:moderateScale(16)
  },
  amountView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  cashPriceView: {
  },
});
