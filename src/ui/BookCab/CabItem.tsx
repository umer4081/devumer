import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';

interface CabItemProp {
  item: any;
  index: number;
  selectedIndex: number | any;
  onPress?: () => void;
}

const cabColor = ['#EEF1FF', '#F5E8C7', '#EFE1D6', '#D6EFED'];

const CabItem = ({item, index, selectedIndex, onPress}: CabItemProp) => {
  const currentColor = cabColor[index % cabColor.length];
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: currentColor,
        borderColor: selectedIndex == index ? colors._3B4FF4 : currentColor,
      }}
      onPress={onPress}>
      <Image
        source={imagePath.sedan_ic}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.detailView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.boldText}>{'Sedan'}</Text>
          <Text style={styles.boldText}>{'$2.98'}</Text>
        </View>
        <Text style={styles.time}>{'4 min away • 12:33 pm'}</Text>
      </View>
      {index % 3 == 0 && (
        <View style={styles.tag}>
          <Text style={styles.newText}>{'New'}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default CabItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(16),
    padding: moderateScale(14),
    marginBottom: moderateScale(16),
    marginHorizontal: moderateScale(24),
    flexDirection: 'row',
    borderWidth: 2,
  },
  image: {
    height: moderateScale(50),
    width: moderateScale(77),
  },
  detailView: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  boldText: {
    ...commonStyles.fontBold15,
    color: colors._020202,
  },
  time: {
    ...commonStyles.fontSize13,
    color: colors._020202,
    lineHeight: textScale(24),
  },
  tag: {
    backgroundColor: colors._020202,
    position: 'absolute',
    margin: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
  newText: {
    ...commonStyles.fontBold10,
    color: colors._FACE24,
    lineHeight: textScale(11),
  },
});
