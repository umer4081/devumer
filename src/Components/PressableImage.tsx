import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
  } from 'react-native';
  import React from 'react';
  import {hitSlopProp} from '../styles/commonStyles';
  
  interface PressableImageProp {
    iconSource: ImageSourcePropType;
    onPress?: () => void;
    isPressable?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    dotOn?: boolean;
  }
  const PressableImage = ({
    iconSource,
    isPressable = false,
    onPress,
    containerStyle,
    imageStyle,
    dotOn = false,
  }: PressableImageProp) => {
    const Container = isPressable ? Pressable : TouchableOpacity;
    return (
      <Container
        hitSlop={hitSlopProp}
        onPress={onPress}
        style={{...(typeof containerStyle == 'object' && containerStyle)}}>
        <Image
          source={iconSource}
          style={{...(typeof imageStyle == 'object' && imageStyle)}}
        />
      </Container>
    );
  };
  
  export default PressableImage;
  
  const styles = StyleSheet.create({
  });
  