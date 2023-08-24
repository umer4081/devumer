import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    margin: moderateScale(24),
    justifyContent: 'space-between',
  },
  desc: {
    ...commonStyles.fontSize15,
    color: colors.white,
    lineHeight: moderateScale(18),
  },
  lineIconView: {
    marginRight: moderateScale(8),
  },
  blueLine: {
    width:moderateScale(2),
    height:moderateScale(48),
    backgroundColor:colors._3B4FF4,
    alignSelf:'center',
    marginVertical:moderateScale(8),
    borderRadius:moderateScale(2),
  },
});

export default styles;
