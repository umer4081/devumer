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
import imagePath from '../../constants/imagePath';

const Single_image = ({
  item,
  index,
  singleImageAdded,
  customStyles,
  userIcon,
}: any) => {
  const [singleImage, setSingleImage] = useState<any[]>([]);

  const adddImage = () => {
    if (singleImage.length >= 1) {
      setSingleImage([]);

      return;
    }

    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        const paths = images.map(image => image.path);
        setSingleImage(prevImages => [...prevImages, ...paths]);

        console.log(images, 'imagesSuccess2000');
      })
      .catch(err => {
        console.log(err, 'errorr4000');
      });
  };

  const camereImage = () => {
    if (singleImage.length >= 1) {
      setSingleImage([]);
      return;
    }

    ImagePicker.openCamera({
      cropping: false,
    })
      .then(image => {
        const path = image.path;
        setSingleImage(prevImages => [...prevImages, path]);
        console.log(image, 'imageSuccess2000');
      })
      .catch(err => {
        console.log(err, 'error4000');
      });
  };

  const add = () => {
    const options = [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'Gallery',
        onPress: adddImage,

        // onPress: () => {
        //   adddImage();
        //   singleImageAdded();
        // },
        style: 'default',
      },
      {
        text: 'Camera',
        onPress: camereImage,

        // onPress: () => {
        //   camereImage();
        //   singleImageAdded();
        // },
        style: 'default',
      },
    ];

    Alert.alert('Alert Title', 'My Alert Msg', options);
  };

  const deleteImage = (index: number) => {
    setSingleImage(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <View style={{...customStyles.container}}>
        <ScrollView>
          <Text>{item?.question}</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {singleImage.map((image, index) => (
              <>
                <View style={{...styles.userIcon, icon}}>
                  <Card key={index} style={styles.image_single}>
                    <Image source={{uri: image}} style={styles.addOne_img} />

                    <>
                      <TouchableOpacity
                        style={styles.delete_imgII}
                        onPress={() => deleteImage(index)}>
                        <Text style={{color: 'red', fontSize: 16}}>X</Text>
                      </TouchableOpacity>
                    </>
                  </Card>
                </View>
              </>
            ))}
          </View>
        </ScrollView>
      </View>
      {singleImage.length < 1 ? (
        <TouchableOpacity style={styles.image_single} onPress={add}>
          <Image source={imagePath.User2} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Single_image;

const styles = StyleSheet.create({
  image_single: {
    marginBottom: 24,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 16,
    marginTop: 24,
    alignSelf: 'center',
    // paddingHorizontal: 24,
    marginHorizontal: 24,
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

  delete_imgII: {
    right: 4,
    position: 'absolute',
    borderRadius: 12,
    fontSize: 30,
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingVertical: 4,
  },
});
