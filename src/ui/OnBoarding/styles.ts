import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale, textScale, width} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: moderateScale(24),
    alignItems: 'center',
  },
  descBold: {
    ...commonStyles.fontSizeMedium47,
    lineHeight: textScale(56),
    width:'80%'
  },
  desc: {
    ...commonStyles.fontSizeLight15,
    color: colors._A2A2A2,
    lineHeight: moderateScale(18),
    marginTop:moderateScale(24),
    width:'90%',
  },
  imageLogo: {
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(12),
  },
  buttonContainer: {
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScale(24),
  },
  descriptionContainer: {
    width: width / 1.51,
  },
});

export default styles;
