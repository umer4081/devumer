import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useImperativeHandle, useState} from 'react';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {otpTimerCounter} from '../utils/helperFunction';
import {textScale} from '../styles/responsiveSize';

export interface UserTimeMethod {
  restart: (val?: number) => void;
  stop: () => void;
}
export interface UserTimeProp {
  duration?: number;
  onTimerStop?: () => void;
  onTimerTicking?: (res: number) => void;
}

const UseTimer = (
  {duration = 30, onTimerStop = () => {}, onTimerTicking}: UserTimeProp,
  ref: any,
) => {
  const [state, setState] = useState({
    totalTime: Date.now() + (duration + 1) * 1000,
    time: duration,
  });
  const {totalTime, time} = state;
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));

  useImperativeHandle(ref, () => {
    return {
      restart: (val?: number) => {
        const durationTime = (val ? val : duration) + 1;
        updateState({
          totalTime: Date.now() + durationTime * 1000,
          time: durationTime - 1,
        });
      },
      stop: () => updateState({time: 0}),
    };
  });

  useEffect(() => {
    !!onTimerTicking && onTimerTicking(time);
    const interval = setTimeout(() => {
      if (time > 0) {
        updateState({
          time: Math.floor((totalTime - Date.now()) / 1000),
        });
      } else {
        onTimerStop();
      }
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [time]);

  return (
    <Text style={styles.timer}>
      {time > 0 ? otpTimerCounter(time) : '00:00'}
    </Text>
  );
};

export default React.forwardRef(UseTimer);

const styles = StyleSheet.create({
  timer: {
    ...commonStyles.fontBold15,
    color: colors._020202,
    lineHeight: textScale(22),
  },
});
