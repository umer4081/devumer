import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';

interface NotificationItemProp {
  item?: any;
  index: number;
  onPress?: () => void;
}

const NotificationItem = ({item, index, onPress}: NotificationItemProp) => {
  return (
    <Pressable onPress={onPress} style={styles.notificationView}>
      <Text style={styles.title}>{'Sit back & relax'}</Text>
      <Text style={styles.message}>
        {
          'Whenever you’re in drveR cab, we’ll take you to your location, anytime. Book Now'
        }
      </Text>
      <Text style={styles.time}>{'2 hours ago'}</Text>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  notificationView: {
    paddingVertical: moderateScale(16),
    marginHorizontal: moderateScale(24),
    borderBottomWidth:moderateScale(1),
    borderBottomColor:colors._E2E2E2
  },
  title: {
    ...commonStyles.fontBold12,
    color: colors._A2A2A2,
    textTransform:'uppercase'
  },
  message: {
    ...commonStyles.fontSize14,
    color: colors._020202,
    lineHeight: textScale(20),
  },
  time: {
    ...commonStyles.fontSize12,
    color: colors._A2A2A2,
    lineHeight: textScale(24),
  },
});
