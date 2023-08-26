import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
import ImageTitleValue from './ImageTitleValue';
import {static_url} from '../constants/contant';
import BlueButton from './BlueButton';
import AddressView from './AddressView';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../constants/navigationString';

interface HistoryCardProp {
  item?: any;
  index?: number;
}

interface NavigationProp {
  navigate: (res: string) => void;
}

const HistoryCard = ({item, index}: HistoryCardProp) => {
  const navigation = useNavigation<NavigationProp>();
  const historydetail = () => {
    navigation.navigate(navigationString.RIDE_HISTORY_DETAIL);
  };

  return (
    <Pressable style={styles.container} onPress={historydetail}>
      <View style={styles.upperView}>
        <View style={styles.lineIconView}>
          <Image
            source={imagePath.location_ic}
            style={{height: 16, width: 16}}
          />
          <View style={styles.blueLine} />
          <Image
            source={imagePath.navigation_ic}
            style={{height: 16, width: 16}}
          />
        </View>
        <View style={{flex: 1}}>
          <AddressView
            title="Pickup location"
            time={'7:12 am'}
            address="SCO 50-51, Sector 34B, Sector 34, Chandigarh ,Sector 34, "
          />
          <AddressView
            title="Drop location"
            time={'8:30 am'}
            address="SCO 50-51, Sector 34B, Sector 34, Chandigarh ,Sector 34, "
            containerStyle={{marginTop: moderateScale(8)}}
          />
        </View>
      </View>
      <View style={styles.greyLine} />
      <View style={styles.driverDetail}>
        <ImageTitleValue
          imgsource={{uri: static_url}}
          title="Steve Rogers"
          value="4.5"
          isStar={true}
          titleStyle={{color: colors._020202}}
          valueStyle={{color: colors._020202}}
        />
        <Text style={styles.amount}>$25.17</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.date}>01 May 2018</Text>
        <BlueButton
          buttonStyle={styles.rebookButton}
          buttonTitle="Reebook"
          textStyle={styles.rebookText}
        />
      </View>
    </Pressable>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    marginHorizontal: moderateScale(24),
    marginBottom: moderateScale(16),
    shadowColor: colors.blackOpacity60,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
  },

  lineIconView: {
    marginRight: moderateScale(8),
  },
  blueLine: {
    width: moderateScale(2),
    height: moderateScale(28),
    backgroundColor: colors._3B4FF4,
    alignSelf: 'center',
    marginVertical: moderateScale(8),
    borderRadius: moderateScale(2),
  },
  upperView: {
    flexDirection: 'row',
  },
  greyLine: {
    height: moderateScale(1),
    backgroundColor: colors._E2E2E2,
    marginVertical: moderateScale(16),
  },
  driverDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    ...commonStyles.fontBold14,
    color: colors._020202,
  },
  date: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight: textScale(24),
  },
  detailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(16),
  },
  rebookButton: {
    height: moderateScale(24),
    paddingHorizontal: moderateScale(8),
  },
  rebookText: {
    ...commonStyles.fontSizeMedium12,
    color: colors.white,
  },
});
