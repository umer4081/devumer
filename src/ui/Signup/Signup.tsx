import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import navigationString from '../../constants/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appleAuth from '@invertase/react-native-apple-authentication';
import imagePath from '../../constants/imagePath';
import WrapperView from '../../Components/WrapperView';
import HeaderLogo from '../../Components/HeaderLogo';
import CountryPhoneNumber from '../../Components/CountryPhoneNumber';
import BlueButton from '../../Components/BlueButton';
import SocialButton from './SocialButton';
import colors from '../../styles/colors';
import TextInputLabeled from '../../Components/TextInputLabeled';
import {moderateScale} from '../../styles/responsiveSize';
import styles from '../Signup/styles';

const Signup = ({navigation}: any) => {
  const countryCode = useRef('1');
  const iso2Code = useRef('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '704513554505-83gc0fjoahq572r608vgp30v9snn5u86.apps.googleusercontent.com',
    });
  }, []);

  // Function to validate email using regex
  const isValidEmail = (email: any) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };
  const verifyOtp = () => {
    if (userName.length < 4) {
      showError('Name should not be empty');
    } else if (!isValidEmail(userEmail)) {
      showError('Enter a valid email address');
    } else if (phoneNumber.length == 0) {
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
        name: userName,
        email: userEmail,
      };
      actions
        .phonelogin(apiData)
        .then((res: any) => {
          console.log(res, 'resresresresres');
          setisLoading(false);
          showSuccess('OTP sent successfully');
          navigation.navigate(navigationString.OTP_VERIFICATION, {
            countryCode: countryCode.current,
            phoneNumber,
            iso2Code: iso2Code.current,
            isSignUp: true,
            name: userName,
            email: userEmail,
          });
        })
        .catch(err => {
          showError(err);
          setisLoading(false);
        });
    }
  };

  const socialLogin = (apiData: object) => {
    setisLoading(true);
    console.log(apiData, 'apiData');
    actions
      .socialLoginSignUp(apiData)
      .then((res: any) => {
        setisLoading(false);
        navigation.navigate(navigationString.SELFIEE_SCREEN, {});
      })
      .catch(err => {
        console.log(err, '000rercatchcatchrerrerrerrerrerrerrerr');
        typeof err == 'string' && showError(err);
        setisLoading(false);
      });
  };

  const googleLogin = async () => {
    GoogleSignin.signOut();
    try {
      const userInfo = await GoogleSignin.signIn();

      let fcmToken = await AsyncStorage.getItem('fcmToken');
      const apiData = {
        social_key: userInfo.user.id,
        admin_email: 'admin@gmail.com',

        ...(userInfo.user.email && {email: userInfo.user.email}),
        ...(userInfo.user.givenName && {name: userInfo.user.givenName}),
      };
      socialLogin(apiData);
    } catch (error) {
      console.log(error, 'socialLogin-errorerrorerror');
    }
  };

  const handleAppleLogin = async () => {
    try {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const apiData = {
        social_key: appleAuthRequestResponse.user,
        admin_email: 'admin@gmail.com',
        ...(appleAuthRequestResponse.email && {
          email: appleAuthRequestResponse.email,
        }),
        ...(appleAuthRequestResponse.fullName?.givenName && {
          name: appleAuthRequestResponse.fullName?.givenName,
        }),
      };
      socialLogin(apiData);
    } catch (e) {}
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
            {/* <Image source={imagePath.onboard_logo} /> */}
            <HeaderLogo
              navigateToScreen="login"
              newUserText="Have account?"
              signUpText="Sign In"
            />

            <Text style={styles.CreateText}>{'Create your account.'}</Text>
            <Text style={styles.JoinUsTodayText}>
              {'Join us today by setting up your personalized account.'}
            </Text>
            <View style={{marginTop: moderateScale(32)}}>
              <TextInputLabeled
                value={userName}
                onChangeText={val => setUserName(val)}
                containerStyle={styles.useName}
                placeholder={'Enter name'}
              />
              <TextInputLabeled
                value={userEmail}
                containerStyle={styles.userEmail}
                placeholder={'Enter email'}
                keyboardType="email-address"
                onChangeText={val => setUserEmail(val)}
              />
            </View>
            <CountryPhoneNumber
              containerStyle={styles.userNumber}
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
            <Text style={styles.termcondText}>
              {'By tapping on Continue you agree to our '}
              <Text style={{color: colors._3B4FF4}}>
                {'Terms of services '}
              </Text>
              {'and '}
              <Text style={{color: colors._3B4FF4}}>{'Privacy policy'}</Text>
            </Text>
            <BlueButton
              buttonStyle={styles.buttonStyle}
              onPress={verifyOtp}
              // onPress={SelfieeScreen}
            />
            <View style={styles.orView}>
              <View style={styles.line} />
              <Text style={styles.orText}>{'OR'}</Text>
            </View>

            {/* <SocialButton
              icon={imagePath.facebook_ic}
              buttonTitle="Continue with Facebook"
            /> */}
            {Platform.OS == 'ios' ? (
              <SocialButton
                icon={imagePath.apple_ic}
                buttonTitle="Continue with Apple"
                onPress={handleAppleLogin}
              />
            ) : (
              <></>
            )}

            <SocialButton
              icon={imagePath.google_ic}
              buttonTitle="Continue with Google"
              onPress={googleLogin}
            />
          </WrapperView>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
