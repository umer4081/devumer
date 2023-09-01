import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import BookRide from './BookRide';
import MapView, {Marker} from 'react-native-maps';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import BookingDetail from './BookingDetail';
import DriverNameDetailView from './DriverNameDetailView';
import {
  checkForLocationAddress,
  getCurrentLocation,
} from '../../utils/helperFunction';
import {GeolocationResponse} from '@react-native-community/geolocation';
import actions from '../../redux/actions';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../../constants/contant';
import colors from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

let LATITUDE_DELTA = 0.0922;
let LONGITUDE_DELTA = 0.0421;

const Home = () => {
  const cabBooked = useSelector((state: any) => state?.bookedCab)?.data;
  const isCabBooked = (cabBooked?.status == 'ACCEPTED' || cabBooked?.status == 'ARRIVED'||cabBooked?.status == 'ENDED');
  const accessTokenData = useSelector(
    (state: any) => state?.accessTokenData,
  )?.data;
console.log(cabBooked,"cabBookedcabBookedcabBookedcabBookedcabBookedcabBookedcabBooked")
  const destination: any =
    cabBooked?.Task_Data?.length > 1
      ? {
          longitude: Number(cabBooked?.Task_Data[1]?.longitude),
          latitude: Number(cabBooked?.Task_Data[1]?.latitude),
        }
      : {};
  const origin: any =
    cabBooked?.Task_Data?.length > 1
      ? {
          longitude: Number(cabBooked?.Task_Data[0]?.longitude),
          latitude: Number(cabBooked?.Task_Data[0]?.latitude),
        }
      : {};

  const [state, setState] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  });
  const {region, latitude, longitude} = state;
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  useEffect(() => {
    triggerCurrentLocation();
    actions.accessTokenLogin();
    actions.updateDeviceToken();
  }, []);
 
  const triggerCurrentLocation = () => {
    getCurrentLocation().then((res: GeolocationResponse) => {
      console.log(res, 'resresresresresresres');
      updateState({
        region: {
          ...region,
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        },
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      });
      checkForLocationAddress(res.coords.latitude, res.coords.longitude);
    });
  };

  return (
    <WrapperContainer removeBottomInset>
      <View style={styles.container}>
        <HeaderScene
          title={`Hey ${accessTokenData?.name ?? ''}!`}
          valueText="Grab your new ride now"
          isBottomBorder={!isCabBooked}
        />
        <View style={styles.content}>
          <View
            style={isCabBooked ? styles.onbookingMap : styles.initialmapView}>
            <MapView
              key={'home'}
              initialRegion={region}
              region={region}
              style={styles.map}>
              {cabBooked?.Task_Data?.length > 1 ? (
                <>
                  {destination?.latitude &&
                    destination?.longitude &&
                    origin?.latitude &&
                    origin?.longitude && (
                      <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAP_KEY}
                        strokeWidth={4}
                        strokeColor={colors._3B4FF4}
                      />
                    )}
                  {origin?.latitude && origin?.longitude && (
                    <Marker
                      key={'origin'}
                      icon={imagePath.current_loc_ic}
                      anchor={{x: 0.5, y: 0.5}}
                      coordinate={origin}
                    />
                  )}
                  {destination?.latitude && destination?.longitude && (
                    <Marker
                      key={'destination'}
                      icon={imagePath.drop_loc_ic}
                      anchor={{x: 0.5, y: 0.5}}
                      coordinate={destination}
                    />
                  )}
                </>
              ) : (
                <Marker
                  key={'current'}
                  coordinate={{latitude: latitude, longitude: longitude}}
                  icon={imagePath.current_loc_ic}
                  anchor={{x: 0.5, y: 0.5}}
                />
              )}
            </MapView>
          </View>
          {isCabBooked && <DriverNameDetailView />}
          {isCabBooked ? <BookingDetail /> : <BookRide />}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
