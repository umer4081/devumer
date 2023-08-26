import {Animated, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export interface ImagePickerSheetMethod {
  show: () => void;
  hide: () => void;
}
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ImagePickerSheetProp {
  title?: string;
  onPick?: (res: any) => void;
}

const ImagePickerSheet = (
  {title = 'Add Profile Picture', onPick}: ImagePickerSheetProp,
  ref: any,
) => {
  const options = ['Camera', 'Gallery'];
  const [visible, setVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  useImperativeHandle(ref, () => {
    return {
      show: () => {
        setVisible(true);
        animateAction();
      },
      hide: () => setVisible(false),
    };
  });

  const animateAction = (val = 1, finish = () => {}) => {
    Animated.spring(animatedValue, {
      toValue: val,
      useNativeDriver: true,
      bounciness: 5,
    }).start(({finished}) => {
      finished && finish && finish();
    });
  };

  const interpolation = (outputRange: any[] = []) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };

  const onPressCancel = () => {
    animateAction(0, () => setVisible(false));
  };

  const cameraOpen = async () => {
    try {
      const result = await launchCamera({mediaType: 'photo'});
      if (result.assets) {
        onPick && onPick(result.assets[0]);
        setVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const galleryOpen = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets) {
        onPick && onPick(result.assets[0]);
        setVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickOption=(index:number)=>{
    index == 0 && cameraOpen()
    index == 1 && galleryOpen()
  }

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <Animated.View
        style={{...styles.blackBg, opacity: interpolation([0, 1])}}
      />
      <View style={styles.container}>
        <AnimatedPressable style={{flex: 1}} onPress={onPressCancel} />
        <Animated.View
          style={{
            ...styles.content,
            transform: [
              {
                translateY: interpolation([250, 0]),
              },
            ],
          }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {options.map((item, index) => {
            return (
              <Pressable
                style={{
                  ...styles.optionView,
                  borderBottomWidth: index != options.length - 1 ? 0.6 : 0,
                  ...(index == options.length - 1 && styles.lastOption),
                }}
                key={index.toString()} onPress={()=>onClickOption(index)}>
                <Text style={styles.text}>{item}</Text>
              </Pressable>
            );
          })}
          <Pressable style={styles.cancelButton} onPress={onPressCancel}>
            <Text style={styles.text}>{'Cancel'}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default React.forwardRef(ImagePickerSheet);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-end',
  },
  blackBg: {
    backgroundColor: colors.blackOpacity20,
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  content: {
    margin: moderateScale(6),
  },
  optionView: {
    backgroundColor: '#FCFFF9',
    height: moderateScale(54),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors._C3C3C3,
  },
  text: {
    ...commonStyles.fontSizeMedium16,
    color: colors._007AFF,
  },
  cancelButton: {
    backgroundColor: colors.white,
    height: moderateScale(54),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    marginTop: moderateScale(8),
  },
  titleView: {
    backgroundColor: '#FCFFF9',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors._C3C3C3,
    borderBottomWidth: 0.6,
    paddingVertical: moderateScale(12),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
  },
  title: {
    ...commonStyles.fontSize15,
    color: colors._7C7C7C,
  },
  lastOption: {
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
    borderBottomWidth: 1,
  },
});
