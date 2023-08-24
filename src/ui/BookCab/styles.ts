import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container:{
    flex:1
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
  bottomButtonView:{
    flexDirection:'row',
    marginHorizontal:moderateScale(24),
    marginBottom:moderateScale(24),
  },
  buttonStyle:{
    flex:1,
    marginLeft:moderateScale(16)
  }
});

export default styles;
