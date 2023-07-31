import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {textScale} from '../styles/responsiveSize';
import {Button} from 'react-native-paper';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

// interface button {
//   icon?: any;
//   mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
//   onpress?: () => void;
//   ButtonText?: string;
//   loading?: boolean;
//   dark?: boolean;
//   buttonstyle?: any;
//   disabled?: boolean;
//   textColor?: string;
//   type?: string;
// }
interface button {
  type?: 'RoundedRectangle' | 'Rectangle' | 'eclipsrectangle';
  btnText?: string;
  buttoncolor?: string;
  textcolor?: string;
  onpress?: () => {};
  icon?: any;
  iconstyle?: any;
}
const Buttoncomp = ({
  // icon,
  // mode,
  // onpress,
  // ButtonText,
  // loading,
  // dark,
  // buttonstyle,
  // disabled,
  // textColor,
  type,
  btnText,
  buttoncolor = 'pink',
  textcolor = 'black',
  icon,
  onpress,
  iconstyle,
}: button) => {
  let br = type == 'RoundedRectangle' ? 16 : 0;
  return (
    // <Button
    //   icon={icon}
    //   mode={mode}
    //   onPress={onpress}
    //   loading={loading}
    //   dark={dark}
    //   style={{...styles.buttonstyle, ...buttonstyle}}
    //   textColor={textColor ? textColor : colors.black}
    //   disabled={disabled}>
    //   {ButtonText}
    // </Button>
    <View style={{flex: 1}}>
      {type == 'Rectangle' && (
        <TouchableOpacity
          onPress={onpress}
          style={{
            ...styles.buttonstyle,
            backgroundColor: buttoncolor,
            borderRadius: br,
          }}>
          {icon && (
            <Image
              style={{...styles.iconstyle, ...iconstyle}}
              source={{uri: icon}}
            />
          )}

          <Text style={{...styles.textStyle, color: textcolor}}>{btnText}</Text>
        </TouchableOpacity>
      )}
      {type == 'RoundedRectangle' && (
        <TouchableOpacity
          onPress={onpress}
          style={{
            ...styles.buttonstyle,
            backgroundColor: buttoncolor,
            borderRadius: 16,
          }}>
          {icon && (
            <Image
              style={{...styles.iconstyle, ...iconstyle}}
              source={{uri: icon}}
            />
          )}
          <Text style={{...styles.textStyle, color: textcolor}}>{btnText}</Text>
        </TouchableOpacity>
      )}
      {type == 'eclipsrectangle' && (
        <TouchableOpacity
          onPress={onpress}
          style={{
            ...styles.buttonSquare,
            backgroundColor: buttoncolor,
            borderRadius: 28,
          }}>
          {icon && (
            <Image
              style={{...styles.iconstyle, ...iconstyle}}
              source={{uri: icon}}
            />
          )}
          <Text style={{...styles.textStyle, color: textcolor}}>{btnText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Buttoncomp;

const styles = StyleSheet.create({
  buttonstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    marginTop: 24,
  },
  textStyle: {
    ...commonStyles.fontSize14,
    // flex: 1,
    textAlign: 'center',
  },
  iconstyle: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  buttonSquare: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    marginTop: 24,
    // width: 50,
  },
});
