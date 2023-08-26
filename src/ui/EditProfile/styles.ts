import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
    marginBottom: moderateScale(24),
    marginTop: moderateScale(20),
    flex: 1,
  },
  editProfileText: {
    ...commonStyles.fontBold18,
    color: colors._020202,
    lineHeight: moderateScale(32),
  },
  descText: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  dragLine: {
    backgroundColor: colors._E2E2E2,
    height: moderateScale(4),
    alignSelf: 'center',
    marginTop: moderateScale(8),
    width: moderateScale(72),
    borderRadius: moderateScale(2),
  },
});

export default styles;
