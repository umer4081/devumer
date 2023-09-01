import {useState} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Card, Text} from 'react-native-paper';
import imagePath from '../../constants/imagePath';
import {showError, showSuccess} from '../../utils/helperFunction';
import styles from './styles';

const Multi_images = () => {
  const [imageList, setImageList] = useState<any[]>([]);

  const [isImageVisible, setImageVisible] = useState(true);

  const save = () => {
    showSuccess('Image Saved');
    setImageVisible(false);
  };
  const edit = () => {
    setImageVisible(true);
  };

  const numberOfImages = 3;

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

        console.log(images, 'imagesSuccess2000');
      })
      .catch(err => {
        console.log(err, 'errorr4000');
      });
  };

  const camereImage = () => {
    if (imageList.length >= 8) {
      setImageList([]);
      return;
    }

    ImagePicker.openCamera({
      cropping: false,
    })
      .then(image => {
        const path = image.path;
        setImageList(prevImages => [...prevImages, path]);
        console.log(image, 'imageSuccess2000');
      })
      .catch(err => {
        console.log(err, 'error4000');
      });
  };

  const Choose = () => {
    const options: Array<{
      text: string;
      onPress: () => void;
      style: 'default';
    }> = [
      {
        text: 'Cancel',
        style: 'default',
        onPress: () => {}, // Provide a dummy onPress function
      },
      {
        text: 'Gallery',
        style: 'default',
        onPress: imagePicker,
      },
      {
        text: 'Camera',
        style: 'default',
        onPress: camereImage,
      },
    ];

    Alert.alert('Alert Title', 'My Alert Msg', options);
  };

  const deleteImage = (index: number) => {
    setImageList(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            alignItems: 'center',
            // marginRight: 8,
          }}>
          <>
            <>
              <View style={{...styles.chooseImage}}>
                <View style={styles.multiimage}>
                  {imageList.length === 0 && (
                    <>
                      {[...Array(numberOfImages)].map((_, index) => (
                        <Image
                          key={index}
                          source={imagePath.user1}
                          style={{
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 8,
                          }}
                        />
                      ))}
                    </>
                  )}
                </View>
              </View>
              <></>
            </>
            {imageList.map((image, index) => (
              <>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    marginRight: 8,
                  }}>
                  <Card key={index} style={styles.card}>
                    <>
                      <Image
                        source={{uri: image}}
                        style={{
                          ...styles.imageList,
                          paddingRight: 8,
                        }}
                      />
                      {isImageVisible && (
                        <TouchableOpacity
                          style={styles.delete_img}
                          onPress={() => {
                            deleteImage(index), showError(' delete Success');
                          }}>
                          <Text style={{color: 'red'}}>X</Text>
                        </TouchableOpacity>
                      )}
                    </>
                  </Card>
                </View>
              </>
            ))}
            <>
              <>
                <>
                  {isImageVisible && imageList.length < 4 ? (
                    <TouchableOpacity onPress={Choose}>
                      <Image
                        source={imagePath.puls}
                        style={{marginRight: 24}}
                      />
                    </TouchableOpacity>
                  ) : null}
                </>

                {imageList.length > 0 && !isImageVisible ? (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      paddingLeft: 24,
                    }}
                    onPress={edit}>
                    <Image
                      style={{width: 14, height: 14}}
                      source={imagePath.edditt}
                    />
                  </TouchableOpacity>
                ) : null}
              </>
            </>
          </>
        </View>
        <>
          <>
            {imageList.length > 0 && isImageVisible && (
              <>
                <TouchableOpacity onPress={save}>
                  <Text
                    style={{
                      marginRight: 10,
                      color: 'blue',
                      textAlign: 'center',
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </>
        </>
      </View>
    </View>
  );
};

export default Multi_images;
