import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import PressableImage from './PressableImage';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

interface HeaderSceneProp {
  title?: string;
  valueText?: string;
  isBottomBorder?: boolean;
}

interface NavigationProp {
  openDrawer: () => void;
  closeDrawer: () => void;
  navigate: (res: string) => void;
}

const HeaderScene = ({
  title = '',
  valueText = '',
  isBottomBorder = true,
}: HeaderSceneProp) => {
  const navigation = useNavigation<NavigationProp>();
  const onPressSide = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        ...styles.container,
        ...(!isBottomBorder && {borderBottomWidth: 0}),
      }}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.valueText}>{valueText}</Text>
      </View>
      <Pressable style={styles.iconView} onPress={onPressSide}>
        <View style={styles.shadowView}>
          <Image source={imagePath.side_menu_ic} />
        </View>
      </Pressable>
    </View>
  );
};

export default HeaderScene;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors._E2E2E2,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(12),
    paddingBottom: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...commonStyles.fontBold18,
    color: colors._020202,
  },
  valueText: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight: textScale(24),
  },
  iconView: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(48),
    // overflow: 'hidden',
    shadowColor: colors._020202,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  shadowView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 0.5,
    borderRadius: moderateScale(48),
  },
});
