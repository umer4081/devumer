import {StyleSheet, Animated, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import DestinationPickupAddress from '../../Components/DestinationPickupAddress';
import {moderateScale} from '../../styles/responsiveSize';
import BlueButton from '../../Components/BlueButton';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';
import ProgressBar from '../../Components/ProgressBar';

const RideRequest = () => {
  return (
    <Animated.View style={styles.container}>
      <ProgressBar containerStyle={styles.bar} />
      <View style={styles.content}>
        <View style={styles.headerView}>
          <Text style={styles.rideText}>{'Ride requested…'}</Text>
          <Text style={styles.changeloctext}>{'Add or change location'}</Text>
        </View>
        <DestinationPickupAddress
          destination="SCO 50-51, Sector 34B, Sector 34, Chandigarh, Sector 34,"
          pickup="SCO 50-51, Sector 34B, Sector 34, Chandigarh, Sector 34,"
          addressViewStyle={styles.addressView}
        />
        <View style={styles.cashSwitchRideView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imagePath.cash_ic} />
            <View style={{marginLeft: moderateScale(8)}}>
              <Text style={styles.price}>$2.98</Text>
              <Text style={styles.CashText}>Cash</Text>
            </View>
          </View>
          <Text style={styles.changeloctext}>Switch ride</Text>
        </View>
        <BlueButton
          buttonStyle={styles.buttonView}
          buttonTitle="Cancel"
          textStyle={styles.cancelText}
        />
      </View>
    </Animated.View>
  );
};

export default RideRequest;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(24),
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    marginTop:moderateScale(8)
  },
  addressView: {
    marginBottom: moderateScale(14),
    shadowColor: colors.blackOpacity60,
    marginHorizontal: 0,
  },
  buttonView: {
    backgroundColor: colors.white,
  },
  cancelText: {
    color: colors._D30E09,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(8),
  },
  rideText: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
  },
  changeloctext: {
    ...commonStyles.fontSizeMedium13,
    color: colors._3B4FF4,
  },
  price: {
    ...commonStyles.fontSizeMedium14,
    color: colors._020202,
  },
  CashText: {
    ...commonStyles.fontSize13,
    color: colors._A2A2A2,
  },
  cashSwitchRideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    marginBottom: moderateScale(16),
    borderRadius: moderateScale(8),
    shadowColor: colors.blackOpacity60,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderRadius:moderateScale(16)
  },
});
