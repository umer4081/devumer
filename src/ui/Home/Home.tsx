import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import BookRide from './BookRide';

const Home = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title='Hey Nicholas!' valueText='Grab your new ride now'/>
        <BookRide />
      </View>
    </WrapperContainer>
  );
};

export default Home;
