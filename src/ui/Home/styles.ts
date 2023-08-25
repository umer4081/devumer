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
  initialmapView: {
    flex: 1,
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(24),
    borderRadius: moderateScale(16),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: -moderateScale(24),
  },
});

export default styles;
