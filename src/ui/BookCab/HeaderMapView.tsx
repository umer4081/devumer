import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux';

interface HeaderMapViewProp {
  isChoosed?: boolean;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const HeaderMapView = ({isChoosed}: HeaderMapViewProp) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const rideDetail = useSelector((state: any) => state?.rideDetail)?.data;

  const [state, setState] = useState({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {region} = state;
  useEffect(() => {
    startAnimation(isChoosed ? 1 : 0);
  }, [isChoosed]);
  const startAnimation = (val = 1) => {
    Animated.spring(animatedValue, {
      toValue: val,
      useNativeDriver: false,
      damping: 14,
    }).start();
  };

  const animationAction = (outputRange: any[] = []) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          initialRegion={region}
          region={region}
          style={styles.map}>

          </MapView>
      </View>
      <LinearGradient
        colors={[colors.white, colors.whiteOpacity10]}
        style={styles.bottomgradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      />
      <AnimatedLinearGradient
        colors={[colors.white, colors.whiteOpacity10]}
        style={{
          ...styles.topgradient,
          transform: [{translateY: animationAction([0, -240])}],
        }}
        start={{x: 0, y: 0.4}}
        end={{x: 0, y: 1.0}}
      />
      <DestinationPickupAddress
        destination={rideDetail?.destination?.address}
        pickup={rideDetail?.pickup?.address}
        addressViewStyle={{
          ...styles.addressView,
          transform: [{translateY: animationAction([0, -240])}],
        }}
      />
      {!isChoosed && (
        <View style={styles.bottomTextView}>
          <Text style={styles.selectCabText}>Select Cab</Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(HeaderMapView);

const styles = StyleSheet.create({
  container: {},
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
    height: width * 1.23,
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
    lineHeight: textScale(24),
  },
  bottomTextView: {
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScale(8),
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // marginBottom: -moderateScale(24),
  },
});
