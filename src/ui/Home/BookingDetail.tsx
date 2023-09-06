import {
  AppState,
  DeviceEventEmitter,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import HomeBlackCard from '../../Components/HomeBlackCard';
import AdressTimeBottomView from './AdressTimeBottomView';
import ImageTitleValue from '../../Components/ImageTitleValue';
import {static_url} from '../../constants/contant';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../constants/navigationString';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';

interface NavigationProp {
  openDrawer: () => void;
  closeDrawer: () => void;
  navigate: (res: string, route?: any) => void;
}
const BookingDetail = () => {
  // const [state, setState] = useState({
  //   driverArrived: false,
  //   rideComplete: false,
  // });
  // const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  // const {driverArrived, rideComplete} = state;
  const cabBooked = useSelector((state: any) => state?.bookedCab)?.data;
  console.log(
    cabBooked,
    'cabBookedcabBoostatestatekedcabBookedcabBookedcabBooked',
  );
  useEffect(() => {
    // updateInRide();
    const listener = DeviceEventEmitter.addListener('statusUpdate', () => {
      updateInRide();
    });
    const appStatelistener = AppState.addEventListener('change', res => {
      res == 'active' && updateInRide();
    });
    return () => {
      listener.remove();
      appStatelistener.remove();
    };
  }, []);

  const updateInRide = () => {
    let query = `?id=${cabBooked?.id}`;
    actions
      .jobDetail(query)
      .then((res: any) => {
        console.log(res, 'resrejobDetailjobDetailjobDetailsresres');
        actions.bookedCab(res);
      })
      .catch(err => {});
  };

  const navigation = useNavigation<NavigationProp>();
  const completedRide = () => {
    // if (rideComplete) {
    //   navigation.navigate(navigationString.RATING_RIDE);
    // } else {
    //   updateState({rideComplete: true});
    // }
  };
  return (
    <>
      {(cabBooked?.status == 'ARRIVED' || cabBooked?.status == 'ENDED') && (
        <HomeBlackCard isTimer={cabBooked?.status != 'ENDED'} cabBookedData={cabBooked}/>
      )}
      <View style={styles.container}>
        <Pressable style={styles.blueCard} onPress={completedRide}>
          {cabBooked?.status != 'ENDED' ? (
            <>
              <View style={{}}>
                <Text style={styles.carcompany}>
                  {cabBooked?.fleet_data?.license_plate}
                </Text>
                <Text style={styles.carPlateNumber}>
                  {cabBooked?.fleet_data?.licence_number}
                </Text>
              </View>
              <Image
                // source={{uri:cabBooked?.fleet_data?.cab}}
                source={imagePath.honda_ic}
                resizeMode="contain"
                style={styles.car}
              />
            </>
          ) : (
            <>
              <ImageTitleValue
                imgsource={{uri: cabBooked?.fleet_data?.profile_pic}}
                title={cabBooked?.fleet_data?.first_name}
                value={cabBooked?.fleet_data?.rating}
                isStar={true}
              />
              <ImageTitleValue
                // imgsource={{uri: cabBooked?.fleet_data?.cab}}
                imgsource={imagePath.sedan_ic}
                title={cabBooked?.fleet_data?.license_plate}
                value={cabBooked?.fleet_data?.licence_number}
                imgProp={{resizeMode: 'contain'}}
              />
            </>
          )}
        </Pressable>
        <AdressTimeBottomView isRideCompleted={cabBooked?.status == 'ENDED'} cabBookedData={cabBooked}/>
      </View>
    </>
  );
};

export default React.memo(BookingDetail);

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
