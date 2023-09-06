import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import UseTimer from './UseTimer';
import { dropOffTime } from '../utils/helperFunction';

interface HomeBlackCardProp {
  isTimer?: boolean;
  onPress?: () => void;
  cabBookedData?:any
}
const HomeBlackCard = ({isTimer = true, onPress,cabBookedData}: HomeBlackCardProp) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation(1);
  }, []);

  const startAnimation = (val = 1) => {
    Animated.spring(animatedValue, {
      toValue: val,
      useNativeDriver: false,
      damping: 17,
    }).start();
  };

  const animationAction = (outputRange: any[] = []) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };
  return (
    <Animated.View
      style={{
        ...styles.container,
        marginBottom: animationAction([
          -moderateScale(224),
          -moderateScale(24),
        ]),
      }}>
      <View style={styles.topView}>
        <Text style={styles.headTitle}>
          {isTimer ? 'Driver has arrived' : 'Heading towards destination'}
        </Text>
        <Text
          style={styles.redText}
          onPress={isTimer && onPress ? onPress : undefined}>
          {isTimer ? <UseTimer duration={300} textStyle={styles.redText}/> : 'Need Help?'}
        </Text>
      </View>
      <Text
        style={{
          ...styles.descText,
          color: isTimer ? colors._A2A2A2 : colors.white,
        }}>
        {isTimer
          ? 'Your driver has arrived and is currently waiting at the pickup location. Waiting charges will charge after 5 mins.'
          : `Drop-off time by ${dropOffTime(cabBookedData?.duration)}`}
      </Text>
    </Animated.View>
  );
};

export default React.memo(HomeBlackCard);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(16),
    backgroundColor: colors._020202,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    paddingBottom: moderateScale(48),
    marginBottom: -moderateScale(24),
  },
  headTitle: {
    ...commonStyles.fontSizeMedium16,
    color: colors.white,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redText: {
    ...commonStyles.fontBold16,
    color: colors._D30E09,
  },
  descText: {
    ...commonStyles.fontSize13,
    color: colors._A2A2A2,
    marginTop: moderateScale(8),
  },
});
