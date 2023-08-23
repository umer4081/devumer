import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';

const Notification = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title='Notifications' valueText='Stay up to date'/>
      </View>
    </WrapperContainer>
  );
};

export default Notification;
