import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from './WrapperContainer';
import {moderateScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';

interface MenuProp {
  source: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}
const CustomDrawer = (props: any) => {
  const Menu = ({source, title = '', onPress}: MenuProp) => {
    return (
      <Pressable onPress={onPress} style={styles.menuContainer}>
        <Image source={source} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Menu source={imagePath.side_home_ic} title='Home'/>
      </View>
    </WrapperContainer>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateScale(12),
  },
  menuContainer:{
    flexDirection:'row'
  },
  title:{
    ...commonStyles.fontSize20,
    color:colors._020202
  }
});
