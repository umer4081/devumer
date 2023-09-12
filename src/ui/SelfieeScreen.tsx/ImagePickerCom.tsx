import React, {useEffect, useState} from 'react';
import {View, Image, Button, StyleSheet, Alert, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from '../../styles/responsiveSize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import {cameraPermission} from '../../utils/Permission';

const ImagePickerCom = ({onImageSelected}: any) => {
  const [imageSource, setImageSource] = useState<any>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    checkCameraPermissions();
  }, []);

  const checkCameraPermissions = async () => {
    const hasCameraPermission = await cameraPermission();
    if (!hasCameraPermission) {
      console.log('Camera permission denied');
    }
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      cropping: true,
      useFrontCamera: true, // Specify to use the front camera
    })
      .then(image => {
        if (image) {
          setImageSource({uri: image.path});
          setShowPlaceholder(false); // Hide the placeholder image
          onImageSelected(image.path);
        } else {
          // Handle the case where the user canceled image capture
          console.log('Image capture was canceled');
        }
      })
      .catch(error => {
        console.log('Image picker error:', error);
      });
  };

  return (
    <View style={styles.main}>
      {imageSource && (
        <View
          style={
            {
              // flex: 1,
              // borderWidth: 1,
              // borderColor: 'red',
              // borderRadius: 200,
            }
          }>
          <Image
            source={imageSource}
            style={{...styles.set_image_single, borderRadius: 200}}
          />
        </View>
      )}

      {showPlaceholder && (
        <TouchableOpacity
          onPress={openCamera}
          style={{display: showPlaceholder ? 'flex' : 'none'}}>
          <Image
            style={styles.image_single}
            source={imagePath.selfie_placeholder}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImagePickerCom;

const styles = StyleSheet.create({
  main: {
    marginBottom: moderateScale(8),
  },
  image_single: {
    alignSelf: 'center',
    width: moderateScale(256),
    height: moderateScale(256),
    marginTop: moderateScale(32),
  },
  set_image_single: {
    alignSelf: 'center',
    width: moderateScale(256),
    height: moderateScale(256),
    marginTop: moderateScale(32),
  },
  addOne_img: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 16,
    paddingHorizontal: 24,
  },
});
