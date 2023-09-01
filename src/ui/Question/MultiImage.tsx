import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';

const MultiImage = ({item, index, onImageAdded}: any) => {
  const [imageList, setImageList] = useState<any[]>([]);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 10000);

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  const imagePicker = () => {
    if (imageList.length >= 3) {
      setImageList([]);
      return;
    }

    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        const paths = images.map(image => image.path);
        setImageList(prevImages => [...prevImages, ...paths]);
        setShowText(true);
        console.log(images, 'imagesSuccess2000');
      })
      .catch(err => {
        console.log(err, 'errorr4000');
      });
  };

  console.log(imageList, 'imageListimageList');

  //// TAKE IMAGE USING CAMERS ==============

  const takePhoto = () => {
    if (imageList.length >= 9) {
      Alert.alert('Maximum Limit Reached', 'You can select up to 9 images.', [
        {
          text: 'OK',
          style: 'default',
        },
      ]);
      return;
    }

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImageList(prevImages => [...prevImages, image.path]);
        console.log(image, 'imageSuccess');
      })
      .catch(error => {
        console.log(error, 'errorr');
      });
  };

  const deleteImage = (index: number) => {
    setImageList(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const choose = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'Gallery',
        // onPress: imagePicker,
        onPress: () => {
          imagePicker();
          onImageAdded();
        },
        style: 'default',
      },
      {
        text: 'Camera',
        onPress: takePhoto,
        // onPress: () => {
        //   takePhoto();
        //   onImageAdded();
        // },

        style: 'default',
      },
    ]);
  };

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <ScrollView>
        <Text>{item?.question}</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
          }}>
          {imageList.map((image, index) => (
            <>
              <Card key={index} style={styles.card}>
                <>
                  <Image
                    source={{uri: image}}
                    style={{
                      ...styles.imageList,
                      paddingHorizontal: 24,
                    }}
                  />
                </>

                <>
                  <TouchableOpacity
                    style={styles.delete}
                    onPress={() => deleteImage(index)}>
                    <Text style={{color: 'red', fontSize: 16}}>X</Text>
                  </TouchableOpacity>
                </>
              </Card>
            </>
          ))}
        </View>
      </ScrollView>
      {imageList.length < 3 ? (
        <View>
          <TouchableOpacity style={styles.chooseImage} onPress={choose}>
            <Text style={styles.btn_txt}>{'Add Image'}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {showText ? (
            <Text
              style={{
                ...styles.btn_txt,
                color: 'red',
                alignSelf: 'center',
                marginBottom: 24,
              }}>
              Maximum Limit Reached
            </Text>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default MultiImage;

const styles = StyleSheet.create({
  card: {
    marginTop: 14,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: 'white',
    // marginHorizontal: 24,
  },
  imageList: {
    width: 100,
    height: 100,
    borderRadius: 8,
    // marginBottom: 24,
    // marginLeft: 24,
  },
  delete: {
    position: 'absolute',
    top: 1,
    right: 2,
    borderRadius: 12,
    fontSize: 30,
  },

  chooseImage: {
    height: 48,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 12,
  },
  btn_txt: {
    color: 'white',
  },
});
