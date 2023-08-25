import {
  StyleSheet,
  Animated,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useImperativeHandle, useRef} from 'react';
import {moderateScale, width} from '../styles/responsiveSize';
import colors from '../styles/colors';

interface ProgressBarProp {
  containerStyle?: StyleProp<ViewStyle>;
}

const ProgressBar = ({containerStyle}: ProgressBarProp, ref: any) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 60000,
    }).start();
  };

  useImperativeHandle(ref, () => {
    return {};
  });

  const animationAction = (outputRange: any[] = []) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };
  return (
    <View
      style={{
        ...styles.container,
        ...(typeof containerStyle == 'object' && containerStyle),
      }}>
      <Animated.View
        style={{
          ...styles.bar,
          transform: [
            {
              translateX: animationAction([-width, 0]),
            },
          ],
        }}
      />
    </View>
  );
};

export default React.forwardRef(ProgressBar);

const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    backgroundColor: colors._E2E2E2,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: colors._3B4FF4,
  },
});
