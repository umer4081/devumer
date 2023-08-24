import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PressableImage from './PressableImage';
import imagePath from '../constants/imagePath';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';

interface HeaderTitleBackProp {
  title?: string;
  onPressBack?: () => void;
  isBottomBorder?: boolean;
}

const HeaderTitleBack = ({
  title,
  onPressBack,
  isBottomBorder = true,
}: HeaderTitleBackProp) => {
  const navigation = useNavigation();
  const goBack = () => {
    onPressBack && onPressBack();
    navigation.goBack();
  };
  return (
    <View
      style={{
        ...styles.container,
        ...(!isBottomBorder && {borderBottomWidth: 0}),
      }}>
      <PressableImage iconSource={imagePath.back_ic} onPress={goBack} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitleBack;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors._E2E2E2,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(12),
    paddingBottom: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...commonStyles.fontBold18,
    color: colors._020202,
    marginLeft: moderateScale(16),
  },
});
