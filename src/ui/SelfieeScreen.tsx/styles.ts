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

  bgImage: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  header_: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SKIP: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
  },
  Take_Selfie: {
    ...commonStyles.fontBold32,
    color: colors._020202,
    textAlign: 'center',
    marginTop: moderateScale(56),
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  Click_selfiee: {
    ...commonStyles.fontSizeMedium16,
    color: colors._020202,
    alignSelf: 'center',
    marginHorizontal: moderateScale(12),
    marginBottom: moderateScale(8),
  },
  change_Later: {
    ...commonStyles.fontSize13,
    color: colors._A2A2A2,
    alignSelf: 'center',
    marginHorizontal: moderateScale(12),
  },

  buttonStyle: {
    // marginVertical: moderateScale(12),
    marginTop: moderateScale(12),
    lineHeight: moderateScale(15),
  },
});

export default styles;

//   {singleImage.map((image, index) => (
//     <>
//       <View>
