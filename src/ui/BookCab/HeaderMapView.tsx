import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../../constants/contant';
import {CalculateCenter, latLongDelta} from '../../utils/helperFunction';
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
  const destination = {
    latitude: rideDetail?.destination?.latitude,
    longitude: rideDetail?.destination?.longitude,
  };
  const origin = {
    latitude: rideDetail?.pickup?.latitude,
    longitude: rideDetail?.pickup?.longitude,
  };

  useEffect(() => {
    startAnimation(isChoosed ? 1 : 0);
  }, [isChoosed]);

  useEffect(() => {
    if (rideDetail?.pickup?.latitude && rideDetail?.destination?.latitude) {
      const delta = latLongDelta(destination, origin);
      updateState({
        region: {
          ...region,
          ...CalculateCenter(destination, origin),
          ...delta,
        },
      });
    }
  }, [rideDetail]);
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
          key={'bookCab'}
          initialRegion={region}
          region={region}
          style={styles.map}>
          {rideDetail?.destination?.latitude &&
            rideDetail?.pickup?.latitude && (
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAP_KEY}
                strokeWidth={4}
                strokeColor={colors._3B4FF4}
              />
            )}

          {origin?.latitude && (
            <Marker
              key={'origin'}
              icon={imagePath.current_loc_ic}
              anchor={{x: 0.5, y: 0.5}}
              coordinate={origin}
            />
          )}
          {destination?.latitude && (
            <Marker
              key={'destination'}
              icon={imagePath.drop_loc_ic}
              anchor={{x: 0.5, y: 0.5}}
              coordinate={destination}
            />
          )}
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
