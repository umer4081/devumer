import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../constants/navigationString';

interface NavigationProp {
  navigate: (res: string) => void;
}

interface HeaderLogoProps {
  newUserText?: string;
  signUpText?: string;
  navigateToScreen?: 'signup' | 'login';
}

const HeaderLogo = ({
  navigateToScreen,
  newUserText = ' New user? ',
  signUpText = 'Sign Up',
}: any) => {
  const navigation = useNavigation<NavigationProp>();

  const goSignUp = () => {
    if (navigateToScreen === 'signup') {
      navigation.navigate(navigationString.SIGNUP);
    } else if (navigateToScreen === 'login') {
      navigation.navigate(navigationString.LOGIN);
    }
  };
  return (
    <View style={styles.headerLogo}>
      <Image source={imagePath.headerLogo} />
      <Pressable onPress={goSignUp}>
        <Text style={styles.NewUserstYle}>
          {newUserText}
          <Text style={styles.signUp}>{signUpText}</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  headerLogo: {
    // marginTop: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  NewUserstYle: {
    ...commonStyles.fontSize15,
    color: colors._A2A2A2,
    lineHeight: moderateScale(18),
  },
  signUp: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
  },
});
