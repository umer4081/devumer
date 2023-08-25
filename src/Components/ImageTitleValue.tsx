import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';
interface ImageTitleValueProp {
  title?: string;
  value?: string;
  imgsource?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}
const ImageTitleValue = ({
  title = '',
  value = '',
  imgsource,
  imageStyle,
}: ImageTitleValueProp) => {
  return (
    <View style={styles.container}>
      {imgsource && (
        <Image
          source={imgsource}
          style={{...(typeof imageStyle == 'object' && imageStyle)}}
        />
      )}
      <View style={{marginLeft: moderateScale(16)}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ImageTitleValue;

const styles = StyleSheet.create({
  container: {},
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
});
