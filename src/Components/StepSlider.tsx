import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';

interface StepSliderProp {
  steps?: number;
  slidevalue?: number | any;
  onStepChange?: (res: any) => void;
  backgroundColor?: string;
}

const StepSlider = ({
  steps = 5,
  slidevalue = null,
  onStepChange,
  backgroundColor,
}: StepSliderProp) => {
  const sliderwidth = useRef(0);
  const lastPositon = useRef(0);
  const [state, setState] = useState({
    value: 0,
  });
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {value} = state;
  const panhandle = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove(e, gestureState) {
        const currentPosition = lastPositon.current + gestureState.dx;
        const stepWidth = sliderwidth.current / steps;
        let val = currentPosition / stepWidth;
        val = Math.floor(val);
        val = val > -1 ? val : 0;
        val = val < steps - 1 ? val : steps - 1;
        typeof slidevalue != 'number' && updateState({value: Math.floor(val)});
        onStepChange && onStepChange(val);
      },
      onPanResponderRelease(e, gestureState) {
        lastPositon.current += gestureState.dx;
      },
    }),
  ).current;

  const marginal =
    ((sliderwidth.current - moderateScale(56)) / (steps - 1)) *
    (typeof slidevalue == 'number' ? slidevalue : value);
  return (
    <View style={styles.sliderView}>
      <View
        style={styles.sliderLine}
        onLayout={({nativeEvent}) => {
          sliderwidth.current = nativeEvent.layout.width;
        }}
      />
      <Animated.View
        {...panhandle.panHandlers}
        style={{
          marginLeft: marginal,
          ...styles.thumb,
          backgroundColor: backgroundColor,
        }}>
        <View style={styles.circleDot} />
      </Animated.View>
    </View>
  );
};

export default StepSlider;

const styles = StyleSheet.create({
  sliderLine: {
    backgroundColor: colors._020202,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
  },
  sliderView: {
    height: moderateScale(56),
    justifyContent: 'center',
  },
  thumb: {
    borderWidth: moderateScale(2),
    height: moderateScale(56),
    width: moderateScale(56),
    borderRadius: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors._020202,
  },
  circleDot: {
    height: moderateScale(14),
    width: moderateScale(14),
    borderRadius: moderateScale(14),
    backgroundColor: colors._020202,
  },
});
