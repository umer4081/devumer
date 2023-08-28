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
    flex: 1,
    marginHorizontal: moderateScale(24),
    marginBottom: moderateScale(24),
    marginTop: moderateScale(12),
  },
  innerContent: {
    flex: 1,
    paddingBottom:moderateScale(24)
  },
  bgImage: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  verifyText: {
    ...commonStyles.fontBold32,
    color: colors._020202,
    marginTop: moderateScale(70),
    marginBottom: moderateScale(8),
  },
  descText: {...commonStyles.fontSizeLight16, color: colors._A2A2A2},
  timerResendView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:moderateScale(20)
  },
  timer:{
    ...commonStyles.fontSize15,
    color:colors._020202
  },
  resendText:{
    ...commonStyles.fontSize15,
    color:colors._A2A2A2
  }
});

export default styles;
