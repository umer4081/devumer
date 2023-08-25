import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import HomeBlackCard from '../../Components/HomeBlackCard';
import AdressTimeBottomView from './AdressTimeBottomView';
import ImageTitleValue from '../../Components/ImageTitleValue';
import {static_url} from '../../constants/contant';

const BookingDetail = () => {
  const [state, setState] = useState({
    driverArrived: false,
    rideComplete: false,
  });
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {driverArrived, rideComplete} = state;
  useEffect(() => {
    setTimeout(() => {
      updateState({driverArrived: true});
    }, 3000);
    setTimeout(() => {
        updateState({rideComplete: true});
      },6000);
  }, []);
  return (
    <>
      {driverArrived && <HomeBlackCard isTimer={!rideComplete} />}
      <View style={styles.container}>
        <View style={styles.blueCard}>
          {!rideComplete ? (
            <>
              <View style={{}}>
                <Text style={styles.carcompany}>Honda Accord</Text>
                <Text style={styles.carPlateNumber}>AJR558D</Text>
              </View>
              <Image
                source={imagePath.honda_ic}
                resizeMode="contain"
                style={styles.car}
              />
            </>
          ) : (
            <>
              <ImageTitleValue
                imgsource={{uri: static_url}}
                title="Steve Rogers"
                value="4.5"
                isStar={true}
              />
              <ImageTitleValue
                imgsource={imagePath.sedan_ic}
                title="Honda Accord"
                value="AJR558D"
                imgProp={{resizeMode: 'contain'}}
              />
            </>
          )}
        </View>
        <AdressTimeBottomView isRideCompleted={rideComplete} />
      </View>
    </>
  );
};

export default BookingDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors._3B4FF4,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
  },

  carcompany: {
    ...commonStyles.fontSizeMedium16,
    color: colors.white,
    lineHeight: textScale(24),
  },
  carPlateNumber: {
    ...commonStyles.fontSize14,
    color: colors.white,
    lineHeight: textScale(24),
  },
  blueCard: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  car: {
    width: moderateScale(154),
    height: moderateScale(80),
    position: 'absolute',
    top: -moderateScale(16),
    right: moderateScale(24),
  },
});
