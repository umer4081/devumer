import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderTitleBack from '../../Components/HeaderTitleBack';
import TextInputLabeled from '../../Components/TextInputLabeled';
import BlueButton from '../../Components/BlueButton';
import {moderateScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import SearchPlaces from '../../Components/SearchPlaces';
import PressButton from './PressButton';

const RideType = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;

  const bookCab = () => {
    navigation.navigate(navigationString.BOOK_CAB, {...route?.params});
  };

  const searchref=useRef()

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
                  <View style={styles.blueLine}/>
                  <Image source={imagePath.navigation_ic} />
                </View>
                <View style={{flex: 1}}>
                  <PressButton title="Pickup location" onPress={()=>searchref.current?.open()}/>
                  <PressButton title="Destination" containerStyle={{marginTop: moderateScale(32)}}/>
                  {/* <TextInputLabeled placeholder="Pickup location" />
                  <TextInputLabeled
                    placeholder="Destination"
                    containerStyle={{marginTop: moderateScale(32)}}
                  /> */}
                </View>
              </View>
            </ScrollView>
            <BlueButton onPress={bookCab}/>
          </KeyboardAvoidingView>
        </View>
        <SearchPlaces ref={searchref}/>
      </View>
    </WrapperContainer>
  );
};

export default RideType;
