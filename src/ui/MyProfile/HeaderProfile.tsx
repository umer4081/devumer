import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {static_url} from '../../constants/contant';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import PressableImage from '../../Components/PressableImage';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../constants/navigationString';

interface NavigationProp {
    openDrawer: () => void;
    closeDrawer: () => void;
    navigate: (res: string) => void;
  }

const HeaderProfile = () => {
    const navigation = useNavigation<NavigationProp>()

    const editProfile=()=>{
        navigation.navigate(navigationString.EDIT_PROFILE)
    }
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Pressable style={styles.profilepic}>
          <Image
            source={{uri: static_url}}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: moderateScale(64),
            }}
          />
          <Image source={imagePath.add_ic} style={styles.addIcon} />
        </Pressable>
        <View style={styles.cardView}>
          <View style={styles.nameEditView}>
            <Text style={styles.name}>Nicholas Warner</Text>
            <PressableImage iconSource={imagePath.edit_ic} onPress={editProfile}/>
          </View>
          <Text style={styles.phoneNumber}>+1 354 875 2351</Text>
        </View>
      </View>
      <Text style={styles.ridehistoryText}>{'Ride History'}</Text>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
  profilepic: {
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: moderateScale(64),
  },
  name: {
    ...commonStyles.fontBold18,
    color: colors._020202,
    lineHeight: textScale(24),
  },
  nameEditView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainView: {
    flexDirection: 'row',
  },
  cardView: {
    flex: 1,
    marginLeft: moderateScale(24),
  },
  phoneNumber: {
    ...commonStyles.fontSize14,
    color: colors._A2A2A2,
    lineHeight: textScale(24),
  },
  addIcon: {
    position: 'absolute',
    right: -moderateScale(8),
    bottom: 0,
  },
  ridehistoryText: {
    ...commonStyles.fontBold15,
    color: colors._020202,
    lineHeight: textScale(32),
    marginVertical: moderateScale(8),
  },
});
