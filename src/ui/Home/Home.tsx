import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import BookRide from './BookRide';
import MapView from 'react-native-maps';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import BookingDetail from './BookingDetail';
import DriverNameDetailView from './DriverNameDetailView';
const Home = () => {
  const cabBooked = useSelector((state: any) => state?.bookedCab)?.bookedCab;
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
            {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          /> */}
            <Image
              source={imagePath.map_img}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          {cabBooked && <DriverNameDetailView />}
          {cabBooked ? <BookingDetail /> : <BookRide />}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
