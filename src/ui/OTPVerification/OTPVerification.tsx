import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import WrapperView from '../../Components/WrapperView';
import imagePath from '../../constants/imagePath';
import BlueButton from '../../Components/BlueButton';
import navigationString from '../../constants/navigationString';
import OTPField from './OTPField';
import UseTimer from '../../Components/UseTimer';
import PressableImage from '../../Components/PressableImage';

const OTPVerification = ({navigation, route}: any) => {
  const countryCode = route?.params?.countryCode;
  const phoneNumber = route?.params?.phoneNumber;
  const verifyOtp = () => {
    navigation.navigate(navigationString.OTP_VERIFICATION);
  };
  const goBack = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <Image source={imagePath.login_bg} style={styles.bgImage} />
      <WrapperView wrapperStyle={styles.content}>
        <PressableImage iconSource={imagePath.back_ic} onPress={goBack}/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="none"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.innerContent}>
            <Text style={styles.verifyText}>{'Verify your number!'}</Text>
            <Text style={styles.descText}>
              {'We have sent an OTP on your number'}
            </Text>
            <Text style={styles.descText}>
              {'+'}
              {countryCode} {phoneNumber}
            </Text>
            <OTPField />
            <View style={styles.timerResendView}>
              <Text style={styles.timer}>You will get <UseTimer/></Text>
              <TouchableOpacity >
                <Text style={styles.resendText}>Resend OTP?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <BlueButton buttonTitle="Verify" onPress={verifyOtp} />
      </WrapperView>
    </View>
  );
};

export default OTPVerification;
