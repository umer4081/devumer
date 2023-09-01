import React, {useState} from 'react';
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
import imagePath from '../../constants/imagePath';
import {showSuccess} from '../../utils/helperFunction';

const SingleImage = () => {
  const [singleImage, setSingleImage] = useState<any[]>([]);
  const [isSingImageVisible, setisSingImageVisible] = useState(true);

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
    // const options = [
    const options: Array<{
      text: string;
      onPress: () => void;
      style: 'default';
    }> = [
      {
        text: 'Cancel',
        style: 'default',
        onPress: () => {},
      },
      {
        text: 'Gallery',
        onPress: adddImage,

        style: 'default',
      },
      {
        text: 'Camera',
        onPress: camereImage,

        style: 'default',
      },
    ];

    Alert.alert('Alert Title', 'My Alert Msg', options);
  };

  const deleteImage = (index: number) => {
    setSingleImage(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {singleImage.map((image, index) => (
            <>
              <View>
                <Card key={index} style={styles.image_single}>
                  <View style={styles.main}>
                    <Image source={{uri: image}} style={styles.addOne_img} />
                  </View>

                  <>
                    {isSingImageVisible && (
                      <TouchableOpacity
                        style={{...styles.delete_imgII}}
                        onPress={() => deleteImage(index)}>
                        <Text style={{color: 'red', fontSize: 16}}>X</Text>
                      </TouchableOpacity>
                    )}
                  </>
                </Card>
                {singleImage.length >= 1 && isSingImageVisible ? (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        setisSingImageVisible(false),
                          showSuccess('Image Saved');
                      }}>
                      <Text style={styles.save}>Save</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
                <>
                  {singleImage && !isSingImageVisible && (
                    <TouchableOpacity
                      onPress={() => setisSingImageVisible(true)}>
                      <Text style={{textAlign: 'center', marginTop: 4}}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              </View>
            </>
          ))}
        </View>
      </ScrollView>

      {singleImage.length < 1 ? (
        <TouchableOpacity style={styles.image_single} onPress={add}>
          <Image source={imagePath.User2} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SingleImage;

const styles = StyleSheet.create({
  image_single: {
    flex: 1,
    // backgroundColor: 'red',
    // marginBottom: 24,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 16,
    // marginTop: 24,
    alignSelf: 'center',
    // paddingHorizontal: 24,
    // marginHorizontal: 24,
  },
  main: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
  addOne_img: {
    flex: 1,
    // backgroundColor: 'red',
    height: 200,
    width: 342,

    borderRadius: 8,

    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  delete_imgII: {
    right: 1,
    position: 'absolute',
    // borderRadius: 12,
    fontSize: 30,
    paddingHorizontal: 4,
    paddingTop: 1,
    paddingVertical: 4,
  },
  save: {
    marginRight: 10,
    color: 'blue',
    textAlign: 'center',
  },
});
