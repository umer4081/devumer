import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {textScale} from '../styles/responsiveSize';
interface AddressViewCardProp {
  title?: string;
  time?: string;
  address?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const AddressView = ({
  title,
  time,
  address,
  containerStyle,
}: AddressViewCardProp) => {
  return (
    <View style={containerStyle}>
      <View style={styles.titleTimeView}>
        <Text style={styles.titleTimeText}>{title}</Text>
        <Text style={styles.titleTimeText}>{time}</Text>
      </View>
      <Text numberOfLines={1} style={styles.addressText}>
        {address}
      </Text>
    </View>
  );
};

export default AddressView;

const styles = StyleSheet.create({
  titleTimeText: {
    ...commonStyles.fontSize12,
    color: colors._A2A2A2,
  },
  addressText: {
    ...commonStyles.fontSize14,
    color: colors._020202,
    lineHeight: textScale(32),
  },
  titleTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
