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
import {checkForLocationAddress, getCurrentLocation} from '../../utils/helperFunction';
import {GeolocationResponse} from '@react-native-community/geolocation';

let LATITUDE_DELTA = 0.0922;
let LONGITUDE_DELTA = 0.0421;

const Home = () => {
  const cabBooked = useSelector((state: any) => state?.bookedCab)?.bookedCab;
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
  }, []);

  const triggerCurrentLocation = () => {
    getCurrentLocation().then((res: GeolocationResponse) => {
      console.log(res,"resresresresresresres")
      updateState({
        region: {
          ...region,
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        },
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      });
      checkForLocationAddress(res.coords.latitude,res.coords.longitude)
    });
  };

  return (
    <WrapperContainer removeBottomInset>
      <View style={styles.container}>
        <HeaderScene
          title="Hey Nicholas!"
          valueText="Grab your new ride now"
          isBottomBorder={!cabBooked}
        />
        <View style={styles.content}>
          <View style={cabBooked ? styles.onbookingMap : styles.initialmapView}>
            <MapView
              scrollEnabled={cabBooked}
              zoomEnabled={cabBooked}
              initialRegion={region}
              region={region}
              style={styles.map}>
              <Marker
                key={'current'}
                coordinate={{latitude: latitude, longitude: longitude}}
                // icon={imagePath.current_loc_ic}
              />
            </MapView>
            {/* <Image
              source={imagePath.map_img}
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: colors.white,
                borderRadius: moderateScale(16),
              }}
            /> */}
          </View>
          {cabBooked && <DriverNameDetailView />}
          {cabBooked ? <BookingDetail /> : <BookRide />}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
