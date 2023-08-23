import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';

const Home = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title='Hey Nicholas!' valueText='Grab your new ride now'/>
      </View>
    </WrapperContainer>
  );
};

export default Home;
