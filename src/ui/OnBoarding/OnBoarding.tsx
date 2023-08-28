import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import BlueButton from '../../Components/BlueButton';
import navigationString from '../../constants/navigationString';

const OnBoarding = ({navigation}: any) => {
  const login = () => {
    navigation.navigate(navigationString.LOGIN);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.onboard_logo} style={styles.imageLogo} />
        <View style={styles.content}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descBold}>
              {`Ready, set, go in just a few quick taps.`}
            </Text>
            <Text style={styles.desc}>
              {`No matter your destination, we’ll get you where you need to go.`}
            </Text>
          </View>
          <Image source={imagePath.car_ic}/>
        </View>
        <BlueButton
          buttonTitle="Get Stared"
          buttonStyle={styles.buttonContainer}
          onPress={login}
        />
      </View>
    </WrapperContainer>
  );
};

export default OnBoarding;
