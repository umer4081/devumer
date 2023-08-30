import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderTitleBack from '../../Components/HeaderTitleBack';
import TextInputLabeled from '../../Components/TextInputLabeled';
import BlueButton from '../../Components/BlueButton';
import {moderateScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import SearchPlaces, {SearchPlacesMethod} from '../../Components/SearchPlaces';
import PressButton from './PressButton';
import {useSelector} from 'react-redux';
import actions from '../../redux/actions';

const RideType = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const currentLocation = useSelector((state: any) => state?.currentLocation);
  const rideDetail = useSelector((state: any) => state?.rideDetail)?.data;
  const currentSelected = useRef(0);
  const [state, setState] = useState({
    destination: {address: ''},
    pickup: currentLocation?.address
      ? {...currentLocation?.data, address: currentLocation?.address}
      : {},
  });
  const {destination, pickup} = state;
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));


  const bookCab = () => {
    actions.rideDetail({destination, pickup});
    navigation.navigate(navigationString.BOOK_CAB, {...route?.params});
  };

  const searchref = useRef<SearchPlacesMethod>(null);

  const onPlaceSelect = (res: any) => {
    const payload = {
      address: res?.address,
      latitude: res?.lat,
      longitude: res?.lng,
    };
    const updatedata =
      currentSelected.current == 1 ? {destination: payload} : {pickup: payload};
    updateState(updatedata);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderTitleBack title={rideName} />
        <View style={styles.content}>
          <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <View style={styles.innerView}>
                <View style={styles.lineIconView}>
                  <Image source={imagePath.location_ic} />
                  <View style={styles.blueLine} />
                  <Image source={imagePath.navigation_ic} />
                </View>
                <View style={{flex: 1}}>
                  <PressButton
                    title="Pickup location"
                    value={pickup?.address}
                    onPress={() => {
                      currentSelected.current = 0;
                      searchref.current?.open();
                    }}
                  />
                  <PressButton
                    title="Destination"
                    value={destination?.address}
                    containerStyle={{marginTop: moderateScale(32)}}
                    onPress={() => {
                      currentSelected.current = 1;
                      searchref.current?.open();
                    }}
                  />
                </View>
              </View>
            </ScrollView>
            <BlueButton
              disabled={
                destination?.address?.length == 0 ||
                pickup?.address?.length == 0
              }
              onPress={bookCab}
            />
          </KeyboardAvoidingView>
        </View>
        <SearchPlaces onPlaceSelect={onPlaceSelect} ref={searchref} />
      </View>
    </WrapperContainer>
  );
};

export default RideType;
