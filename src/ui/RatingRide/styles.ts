import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScale(16),
  },
  desc: {
    ...commonStyles.fontSize15,
    color: colors.white,
    lineHeight: moderateScale(18),
  },
  rideText: {
    ...commonStyles.fontBold18,
    color: colors._020202,
  },
  profileImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(40),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderView: {
    height: moderateScale(56),
    justifyContent: 'center',
  },
  howwasrideText: {
    ...commonStyles.fontSizeMedium36,
    textAlign: 'center',
    marginTop: moderateScale(32),
    marginBottom: moderateScale(48),
  },
  ratingText: {
    ...commonStyles.fontSize22,
    lineHeight: moderateScale(32),
    color: colors._020202,
    textAlign: 'center',
  },
  emoji: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(56),
    height: moderateScale(80),
    width: moderateScale(80),
  },
  textInputView: {
    height: moderateScale(104),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    borderColor: colors._020202,
    marginTop: moderateScale(48),
    marginBottom: moderateScale(24),
  },
  textInput: {
    ...commonStyles.fontSize15,
    height: '100%',
    padding: 0,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    borderColor: colors._020202,
    color: colors._020202,
    textAlignVertical: 'top',
  },
  skipText: {
    ...commonStyles.fontSize16,
    borderColor: colors._020202,
    marginTop: moderateScale(16),
    textAlign: 'center',
  },
});

export default styles;
