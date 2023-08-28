import {
  Image,
  Keyboard,
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
import actions from '../../redux/actions';
import KeyboardAvoidingViewSet from '../../Components/KeyboardAvoidingViewSet';
import { moderateScale } from '../../styles/responsiveSize';

const OTPVerification = ({navigation, route}: any) => {
  const countryCode = route?.params?.countryCode;
  const phoneNumber = route?.params?.phoneNumber;
  const verifyOtp = () => {
    Keyboard.dismiss()
    actions.bookedCab(false);
    navigation.navigate(navigationString.DRAWER_HOME);
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={imagePath.login_bg} style={styles.bgImage} />
      <WrapperView wrapperStyle={styles.content}>
        <PressableImage iconSource={imagePath.back_ic} onPress={goBack} />
        <KeyboardAvoidingViewSet viewOffset={moderateScale(12)}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="none"
            keyboardShouldPersistTaps="handled"
            bounces={false}
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
                <Text style={styles.timer}>
                  You will get <UseTimer />
                </Text>
                <TouchableOpacity>
                  <Text style={styles.resendText}>Resend OTP?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <BlueButton buttonTitle="Verify" onPress={verifyOtp} />
        </KeyboardAvoidingViewSet>
      </WrapperView>
    </View>
  );
};

export default OTPVerification;
