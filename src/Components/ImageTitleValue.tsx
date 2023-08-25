import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
interface ImageTitleValueProp {
  title?: string;
  value?: string;
  imgsource?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  imgProp?: ImageProps | any;
  isStar?: boolean;
}
const ImageTitleValue = ({
  title = '',
  value = '',
  imgsource,
  imageStyle,
  imgProp,
  isStar = false,
  titleStyle,
  valueStyle,
}: ImageTitleValueProp) => {
  return (
    <View style={styles.container}>
      {imgsource && (
        <Image
          source={imgsource}
          style={{
            ...styles.image,
            ...(typeof imageStyle == 'object' && imageStyle),
          }}
          {...imgProp}
        />
      )}
      <View style={{marginLeft: moderateScale(16)}}>
        <Text
          style={{
            ...styles.title,
            ...(typeof titleStyle == 'object' && titleStyle),
          }}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isStar && (
            <Image
              source={imagePath.star_ic}
              style={{marginRight: moderateScale(8)}}
            />
          )}
          <Text
            style={{
              ...styles.value,
              ...(typeof valueStyle == 'object' && valueStyle),
            }}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageTitleValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    ...commonStyles.fontSizeMedium16,
    color: colors.white,
    lineHeight: textScale(24),
  },
  value: {
    ...commonStyles.fontSize13,
    color: colors.white,
    lineHeight: textScale(24),
  },
  image: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(32),
  },
});
