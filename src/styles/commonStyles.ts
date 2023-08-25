import {StyleSheet} from 'react-native';
import {moderateScaleVertical, textScale} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  fontSizeLight15: {
    fontSize: textScale(15),
    color: colors.theme,
    fontFamily: fontFamily.light,
  },
  fontSizeLight16: {
    fontSize: textScale(16),
    color: colors.theme,
    fontFamily: fontFamily.light,
  },
  fontSize10: {
    fontSize: textScale(10),
    color: 'black',
    fontFamily: fontFamily.regular,
  },

  fontSize12: {
    fontSize: textScale(12),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },

  fontSize13: {
    fontSize: textScale(13),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },

  fontSize16: {
    fontSize: textScale(16),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize17: {
    fontSize: textScale(17),
    color: 'black',
    fontFamily: fontFamily.regular,
  },

  fontSize18: {
    fontSize: textScale(18),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize20: {
    fontSize: textScale(20),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize24: {
    fontSize: textScale(24),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize26: {
    fontSize: textScale(26),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize28: {
    fontSize: textScale(28),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  fontSize40: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(40),
    color: 'black',
  },
  fontBold10: {
    fontSize: textScale(10),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold14: {
    fontSize: textScale(14),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold15: {
    fontSize: textScale(15),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold16: {
    fontSize: textScale(16),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold18: {
    fontSize: textScale(18),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold24: {
    fontSize: textScale(24),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold20: {
    fontSize: textScale(20),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold21: {
    fontSize: textScale(21),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontBold26: {
    fontSize: textScale(26),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  fontSizeMedium14: {
    fontSize: textScale(14),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium36: {
    fontSize: textScale(36),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium47: {
    fontSize: textScale(47),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium12: {
    fontSize: textScale(12),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium13: {
    fontSize: textScale(13),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium15: {
    fontSize: textScale(15),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium17: {
    fontSize: textScale(17),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  fontSizeMedium18: {
    fontSize: textScale(18),
    color: 'black',
    fontFamily: fontFamily.medium,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadowStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  buttonRect: {
    height: moderateScaleVertical(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
    borderRadius: 4,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontBoldSize28: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(28),
    color: 'black',
  },
  fontBold32: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(32),
    color: 'black',
  },
  fontBold45: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(45),
    color: 'black',
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
