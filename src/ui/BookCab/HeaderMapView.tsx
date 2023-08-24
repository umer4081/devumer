import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import PressableImage from '../../Components/PressableImage';
import colors from '../../styles/colors';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import DestinationPickupAddress from '../../Components/DestinationPickupAddress';

interface HeaderMapViewProp {
  isChoosed?: boolean;
}

const HeaderMapView = ({isChoosed}: HeaderMapViewProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapView}></View>
      {!isChoosed && (
        <LinearGradient
          colors={[colors.white, colors.whiteOpacity10]}
          style={styles.topgradient}
          start={{x: 0, y: 0.4}}
          end={{x: 0, y: 1.0}}
        />
      )}
      <LinearGradient
        colors={[colors.white, colors.whiteOpacity10]}
        style={styles.bottomgradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      />
      {!isChoosed && (
        <>
          <DestinationPickupAddress
            destination="SCO 50-51, Sector 34B, Sector 34, Chandigarh, Sector 34,"
            pickup="SCO 50-51, Sector 34B, Sector 34, Chandigarh, Sector 34,"
            addressViewStyle={styles.addressView}
          />
          <View style={styles.bottomTextView}>
            <Text style={styles.selectCabText}>Select Cab</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default HeaderMapView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  addressView: {
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
    height: moderateScale(150),
  },
  mapView: {
    width: width,
    height: width * 1.2,
  },
  bottomgradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: moderateScale(150),
  },
  selectCabText: {
    ...commonStyles.fontBold15,
    color: colors._020202,
  },
  bottomTextView: {
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScale(8),
  },
});
