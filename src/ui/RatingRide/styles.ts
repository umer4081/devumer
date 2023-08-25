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
  sliderLine: {
    backgroundColor: colors._020202,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
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
});

export default styles;
