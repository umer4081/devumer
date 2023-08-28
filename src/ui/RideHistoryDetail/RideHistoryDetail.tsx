import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import imagePath from '../../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BlueButton from '../../Components/BlueButton';
import {static_url} from '../../constants/contant';
import AddressView from '../../Components/AddressView';
import FlexedIconView from '../../Components/FlexedIconView';

const RideHistoryDetail = ({navigation}:any) => {
  const insets = useSafeAreaInsets();

  const goBack=()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.mapView}>
          {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        /> */}
          <Image
            source={imagePath.map_img}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <LinearGradient
          colors={[colors.white, colors.whiteOpacity10]}
          style={{
            ...styles.topgradient,
            height: moderateScale(92) + insets.top,
          }}
        />
        <LinearGradient
          colors={[colors.whiteOpacity01, colors.white, colors.white]}
          style={{...styles.bottomgradient}}
        />

        <View style={styles.detailView}>
          <View style={styles.namDPview}>
            <Text style={styles.name}>Ride with Steve Rogers</Text>
            <Image source={{uri: static_url}} style={styles.dp} />
          </View>
          <Text style={styles.time}>01 May 2018 • 12:54 pm</Text>
        </View>
      </View>
      <View style={styles.rideDetail}>
        <Text style={styles.amount}>$25.17</Text>
        <FlexedIconView icon={imagePath.location_ic}>
          <AddressView
            title="Pickup location"
            time={'7:12 am'}
            address="SCO 50-51, Sector 34B, Sector 34, Chandigarh ,Sector 34, "
            containerStyle={{flex: 1}}
          />
        </FlexedIconView>
        <FlexedIconView
          icon={imagePath.navigation_ic}
          conatinerStyle={{marginTop: moderateScale(8)}}>
          <AddressView
            title="Drop location"
            time={'8:30 am'}
            address="SCO 50-51, Sector 34B, Sector 34, Chandigarh ,Sector 34, "
            containerStyle={{flex: 1}}
          />
        </FlexedIconView>
        <FlexedIconView
          icon={imagePath.star_ic}
          conatinerStyle={{
            alignItems: 'center',
            marginVertical: moderateScale(24),
          }}>
          <Text style={styles.ratingText}>No rating</Text>
        </FlexedIconView>
      </View>
      <View
        style={{
          ...styles.headerView,
          marginTop: moderateScale(12) + insets.top,
        }}>
        <Pressable style={styles.iconView} onPress={goBack}>
          <View style={styles.shadowView}>
            <Image source={imagePath.back_cir_ic} />
          </View>
        </Pressable>
        <BlueButton
          buttonStyle={styles.rebookButton}
          buttonTitle="Reebook"
          textStyle={styles.rebookText}
        />
      </View>
    </View>
  );
};

export default RideHistoryDetail;
