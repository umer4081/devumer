import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import CountryPicker, {
  CallingCode,
  CountryCode,
} from 'react-native-country-picker-modal';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
interface CountryPhoneNumberPropType extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  onSelect?: (res: any) => void;
  isCheck?: boolean;
}
const CountryPhoneNumber = ({
  containerStyle,
  onSelect,
  isCheck = false,
  ...rest
}: CountryPhoneNumberPropType) => {
  const [visible, setvisible] = useState(false);
  const [countryCode, setcountryCode] = useState<CountryCode>('US');
  const [callingCode, setcallingCode] = useState<CallingCode>('1');

  return (
    <View
      style={{
        ...styles.container,
        ...(typeof containerStyle == 'object' && containerStyle),
      }}>
      <CountryPicker
        visible={visible}
        countryCode={countryCode}
        onClose={() => {
          setvisible(false);
        }}
        onSelect={data => {
          setcountryCode(data.cca2);
          setcallingCode(data.callingCode[0]);
          onSelect && onSelect(data);
        }}
        withCallingCode
        excludeCountries={['AQ', 'BV', 'TF', 'HM']}
        renderFlagButton={props => {
          return (
            <Pressable
              style={styles.callingCode}
              onPress={() => {
                setvisible(true);
              }}>
              <Text style={styles.inputTextStyle}>+{callingCode}</Text>
              <Image
                source={imagePath.dropdown_ic}
                style={{marginHorizontal: 8}}
              />
            </Pressable>
          );
        }}
        withFilter
      />
      <View style={styles.line} />
      <TextInput
        placeholder="Enter mobile number"
        placeholderTextColor={colors._B2B2B2}
        maxLength={16}
        style={{
          ...styles.inputTextStyle,
          paddingLeft: moderateScale(16),
          flex: 1,
        }}
        {...rest}
      />
      {isCheck && (
        <View style={styles.checkTickView}>
          <Image source={imagePath.check_ic} />
        </View>
      )}
    </View>
  );
};

export default CountryPhoneNumber;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(56),
    backgroundColor: colors._F7F7F7,
    borderRadius: moderateScale(8),
    flexDirection: 'row',
  },
  callingCode: {
    paddingLeft: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTextStyle: {
    ...commonStyles.fontSize15,
    color: colors._020202,
  },
  line: {
    width: 1,
    backgroundColor: colors._DCDCDC,
    marginVertical: moderateScale(8),
  },
  checkTickView: {
    justifyContent: 'center',
    paddingHorizontal:moderateScale(16)
  },
});
