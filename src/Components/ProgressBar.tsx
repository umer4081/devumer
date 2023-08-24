import {StyleSheet, Animated, Text, View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

interface ProgressBarProp{
    containerStyle?: StyleProp<ViewStyle>;
}

const ProgressBar = ({containerStyle}:ProgressBarProp) => {
  return (
    <View style={{...styles.container,   ...(typeof containerStyle == 'object' && containerStyle),}}>
      <Animated.View style={{...styles.bar}} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    backgroundColor:colors._E2E2E2,
    overflow:'hidden'
  },
  bar:{
    height: '100%',
    backgroundColor:colors._3B4FF4
  }
});
