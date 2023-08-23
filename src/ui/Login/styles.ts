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
  desc: {},
  bgImage: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  welcomeText: {
    ...commonStyles.fontBold32,
    color: colors._020202,
    marginTop: moderateScale(56),
  },
  enjoyaText: {
    ...commonStyles.fontSizeLight16,
    color: colors._A2A2A2,
    marginTop: moderateScale(8),
  },
  buttonStyle: {
    marginVertical: moderateScale(24),
  },
  line: {
    height: 1,
    backgroundColor: colors._E2E2E2,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  orView:{
    height:moderateScale(24),
    justifyContent:'center',
    alignItems:'center',
    marginBottom:moderateScale(8)
  },
  orText:{
    ...commonStyles.fontSizeLight15,
    color: colors._A2A2A2,
    backgroundColor:colors.white,
    width:moderateScale(48),
    textAlign:'center'
  },
  termcondText:{
    ...commonStyles.fontSize13,
    color:colors._020202,
    textAlign:'center',
    lineHeight:moderateScale(20),
    marginVertical:moderateScale(24)
  },
  phoneView:{
    marginTop:moderateScale(64)
  }
});

export default styles;
