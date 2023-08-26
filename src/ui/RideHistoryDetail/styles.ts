import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mapView: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomgradient: {
    height: moderateScale(168),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor:'red'
  },
  topgradient: {
    height: moderateScale(160),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  iconView: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(48),
    overflow: 'hidden',
    shadowColor: colors._020202,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  shadowView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 0.5,
    borderRadius: moderateScale(48),
  },
  headerView: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    marginHorizontal: moderateScale(24),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  rebookButton: {
    height: moderateScale(32),
    width: moderateScale(72),
  },
  rebookText: {
    ...commonStyles.fontSizeMedium12,
    color: colors.white,
  },
  detailView:{
    marginHorizontal: moderateScale(24),
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  namDPview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  name:{
    ...commonStyles.fontBold22,
    color: colors._020202,
    lineHeight:moderateScale(32)
  },
  dp:{
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(32),
  },
  time:{
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight:moderateScale(24)
  },
  mapContainer:{
    flex: 1,
  },
  rideDetail:{
    backgroundColor:colors.white,
    paddingHorizontal: moderateScale(24),
  },
  amount:{
    ...commonStyles.fontBold14,
    color: colors._020202,
    lineHeight:moderateScale(24),
    marginTop: moderateScale(8),
    marginBottom: moderateScale(24),
  },
  ratingText:{
    ...commonStyles.fontSize15,
    color: colors._020202,
    lineHeight:moderateScale(24)
  }
});

export default styles;
