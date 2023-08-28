import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WaveIndicator} from 'react-native-indicators';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const AbsoluteLoading = ({isLoading = false}) => {
  if (isLoading) {
    return (
      <View
        style={{...commonStyles.loader, backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <WaveIndicator size={70} color={colors._3B4FF4} animating />
      </View>
    );
  }
};

export default AbsoluteLoading;

const styles = StyleSheet.create({});
