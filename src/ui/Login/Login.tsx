import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import WrapperView from '../../Components/WrapperView';
import imagePath from '../../constants/imagePath';
import BlueButton from '../../Components/BlueButton';
import SocialButton from './SocialButton';
import colors from '../../styles/colors';
import CountryPhoneNumber from '../../Components/CountryPhoneNumber';
import navigationString from '../../constants/navigationString';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';

const Login = ({navigation}: any) => {
  const countryCode = useRef('1');
  const iso2Code = useRef('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const verifyOtp = () => {
    if (phoneNumber.length == 0) {
      showError('Phone Number should not be empty');
    } else if (phoneNumber.length < 8) {
      showError('Enter a valid phone number');
    } else {
      setisLoading(true);
      Keyboard.dismiss();

      const apiData = {
        admin_email: 'admin@gmail.com',
        phone_number: phoneNumber,
        country_code: '+' + countryCode.current,
        iso_code: iso2Code.current,
      };
      actions
        .phonelogin(apiData)
        .then((res: any) => {
          console.log(res, 'resresresresres');
          setisLoading(false);
          showSuccess('OTP sent successfully')
          navigation.navigate(navigationString.OTP_VERIFICATION, {
            countryCode: countryCode.current,
            phoneNumber,
            iso2Code: iso2Code.current,
          });
        })
        .catch(err => {
          showError(err.message)
          setisLoading(false);
        });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
          <Image source={imagePath.login_bg} style={styles.bgImage} />
          <WrapperView wrapperStyle={styles.content} isLoading={isLoading}>
            <Image source={imagePath.onboard_logo} />
            <Text style={styles.welcomeText}>{'Welcome Back!'}</Text>
            <Text style={styles.enjoyaText}>
              {'Enjoy a safer way of getting around'}
            </Text>
            <CountryPhoneNumber
              containerStyle={styles.phoneView}
              value={phoneNumber}
              onChangeText={val => {
                setPhoneNumber(val.replace(/[^\d]/g, ''));
              }}
              onSelect={res => {
                countryCode.current = res.callingCode[0];
                iso2Code.current = res.cca2;
              }}
              keyboardType="numeric"
            />
            <BlueButton buttonStyle={styles.buttonStyle} onPress={verifyOtp} />
            <View style={styles.orView}>
              <View style={styles.line} />
              <Text style={styles.orText}>{'OR'}</Text>
            </View>
            <SocialButton
              icon={imagePath.google_ic}
              buttonTitle="Continue with Google"
            />
            <SocialButton
              icon={imagePath.facebook_ic}
              buttonTitle="Continue with Facebook"
            />
            {Platform.OS == 'ios' ? (
              <SocialButton
                icon={imagePath.apple_ic}
                buttonTitle="Continue with Apple"
              />
            ) : (
              <></>
            )}
            <Text style={styles.termcondText}>
              {'By tapping on Continue you agree to our '}
              <Text style={{color: colors._3B4FF4}}>
                {'Terms of services '}
              </Text>
              {'and '}
              <Text style={{color: colors._3B4FF4}}>{'Privacy policy'}</Text>
            </Text>
          </WrapperView>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
