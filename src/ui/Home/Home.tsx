import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import BookRide from './BookRide';
import MapView from 'react-native-maps';
const Home = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title="Hey Nicholas!" valueText="Grab your new ride now" />
        <View style={styles.initialmapView}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          />
        </View>
        <BookRide />
      </View>
    </WrapperContainer>
  );
};

export default Home;
