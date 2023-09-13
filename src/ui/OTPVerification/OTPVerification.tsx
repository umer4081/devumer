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
import React, {useRef, useState} from 'react';
import styles from './styles';
import WrapperView from '../../Components/WrapperView';
import imagePath from '../../constants/imagePath';
import BlueButton from '../../Components/BlueButton';
import navigationString from '../../constants/navigationString';
import OTPField from './OTPField';
import UseTimer, {UserTimeMethod} from '../../Components/UseTimer';
import PressableImage from '../../Components/PressableImage';
import actions from '../../redux/actions';
import KeyboardAvoidingViewSet from '../../Components/KeyboardAvoidingViewSet';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import {showError, showSuccess} from '../../utils/helperFunction';

const OTPVerification = ({navigation, route}: any) => {
  const countryCode = route?.params?.countryCode;
  const phoneNumber = route?.params?.phoneNumber;
  const isSignUp = route?.params?.isSignUp;
  const timerRef = useRef<UserTimeMethod>(null);
  const [state, setState] = useState({
    isResendClick: false,
    otp: '',
    isLoading: false,
  });
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {isResendClick, otp, isLoading} = state;
  const verifyOtp = async () => {
    Keyboard.dismiss();
    actions.bookedCab(false);

    const apiData = {
      otp: '1234',
      phone_number: phoneNumber,
      country_code: '+' + countryCode,
    };
    console.log(apiData, 'verifyOtp---apiData----');

    updateState({isLoading: true});
    try {
      let res: any = {};
      if (isSignUp) {
        res = await actions.otpVerificationSignUp(apiData);
      } else {
        res = await actions.otpVerification(apiData);
      }
      updateState({isLoading: false});
      if (!res?.profile_pic && isSignUp) {
        navigation.navigate(navigationString.SELFIEE_SCREEN, {});
      }
    } catch (error: any) {
      showError(error);
      updateState({isLoading: false});
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onTimerTicking = (time: number) => {
    if (time < 1) {
      updateState({isResendClick: true});
    }
  };

  const onClickResend = () => {
    const apiData = {
      phone_number: phoneNumber,
      country_code: '+' + countryCode,
    };
    updateState({isLoading: true});
    actions
      .resendOTP(apiData)
      .then(res => {
        showSuccess('OTP sent successfully');
        timerRef.current?.restart();
        updateState({isResendClick: false, isLoading: false});
      })
      .catch(err => {
        updateState({isLoading: false});
      });
  };

  const onChangeOTP = (val: any) => {
    updateState({otp: val});
  };

  return (
    <View style={styles.container}>
      <Image source={imagePath.login_bg} style={styles.bgImage} />
      <WrapperView isLoading={isLoading} wrapperStyle={styles.content}>
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
              <OTPField onChangeOTP={onChangeOTP} />
              <View style={styles.timerResendView}>
                <Text style={{...styles.timer}}>
                  You will get{' '}
                  <UseTimer onTimerTicking={onTimerTicking} ref={timerRef} />
                </Text>
                <TouchableOpacity
                  hitSlop={{left: 40, bottom: 10, top: 10}}
                  disabled={!isResendClick}
                  onPress={onClickResend}>
                  <Text
                    style={{
                      ...styles.resendText,
                      ...(isResendClick && {color: colors._3B4FF4}),
                    }}>
                    Resend OTP?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <BlueButton
            disabled={otp.length < 6}
            buttonTitle="Verify"
            onPress={verifyOtp}
          />
        </KeyboardAvoidingViewSet>
      </WrapperView>
    </View>
  );
};

export default OTPVerification;
