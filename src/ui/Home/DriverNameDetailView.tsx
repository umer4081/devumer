import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import {static_url} from '../../constants/contant';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';

const DriverNameDetailView = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.white, colors.whiteOpacity10]}
        style={styles.topgradient}
        start={{x: 0, y: 0.4}}
        end={{x: 0, y: 1.0}}
      />
      <View style={styles.card}>
        <View style={styles.flexDView}>
          <Image source={{uri: static_url}} style={styles.image} />
          <Text style={styles.name}>Steve Rogers</Text>
        </View>
        <View style={styles.ratingView}>
          <Image source={imagePath.star_ic} />
          <Text style={styles.rating}>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverNameDetailView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topgradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: moderateScale(110),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    marginHorizontal: moderateScale(24),
    borderRadius: moderateScale(8),
    shadowColor: colors.blackOpacity60,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(32),
  },
  name: {
    ...commonStyles.fontSizeMedium16,
    color: colors._020202,
    marginLeft: moderateScale(16),
  },
  flexDView: {
    flexDirection: 'row', 
    alignItems: 'center'
},
  ratingView: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  rating:{
    ...commonStyles.fontSizeMedium13,
    color: colors._A2A2A2,
    marginLeft: moderateScale(8),
  }
});
