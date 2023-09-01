import {View, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Card, Text} from 'react-native-paper';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import {showError, showSuccess} from '../../utils/helperFunction';
import {width} from '../../styles/responsiveSize';

type ImageRendererProps = {
  questionType: 'image' | 'multiimage';
  singleImage: string[];
  imageList: string[];
  numberOfImages: number;
  setSingleImage: any;
  setImageList: any;
};

const ImageRenderer: React.FC<ImageRendererProps> = ({
  questionType,
  singleImage,
  imageList,
  numberOfImages,
  setSingleImage,
  setImageList,
}) => {
  const [isImageVisible, setImageVisible] = useState(true);

  const [isSingImageVisible, setisSingImageVisible] = useState(true);

  const save = () => {
    showSuccess('Image Saved');
    setImageVisible(false);
  };
  const edit = () => {
    setImageVisible(true);
  };

  const deleteImage = (index: number) => {
    setImageList(prevImages => prevImages.filter((_, i) => i !== index));
  };
  const deleteImagee = (index: number) => {
    setSingleImage(prevImages => prevImages.filter((_, i) => i !== index));
  };
  const addImage = (options: any) => {
    if (singleImage.length >= 1) {
      setSingleImage([]);
      return;
    }

    ImagePicker.openPicker(options)
      .then(images => {
        if (images && images.length > 0) {
          const paths = images.map(image => image.path);
          setSingleImage(prevImages => [...prevImages, ...paths]);
          console.log(images, 'imagesSuccess2000');
        } else {
          console.log('Image selection cancelled by the user.');
        }
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
        onPress: () => addImage({multiple: true}),
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

  const imagePicker = () => {
    if (imageList.length >= numberOfImages) {
      setImageList([]);
      return;
    }

    ImagePicker.openPicker({multiple: true})
      .then(images => {
        if (images && images.length > 0) {
          const paths = images.map(image => image.path);
          setImageList(prevImages => [...prevImages, ...paths]);
          console.log(images, 'imagesSuccess2000');
        } else {
          console.log('Image selection cancelled by the user.');
        }
      })
      .catch(err => {
        console.log(err, 'errorr4000');
      });
  };

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

  const choose = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'Gallery',
        onPress: imagePicker,
        style: 'default',
      },
      {
        text: 'Camera',
        onPress: takePhoto,
        style: 'default',
      },
    ]);
  };

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            alignItems: 'center',
          }}>
          {questionType === 'multiimage' && (
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
                          <Text style={{color: 'red', fontSize: 16}}>X</Text>
                        </TouchableOpacity>
                      )}
                    </>
                  </Card>
                </>
              ))}
              <>
                <>
                  <>
                    {isImageVisible && imageList.length < 4 ? (
                      <TouchableOpacity onPress={choose}>
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
          )}
        </View>
        <>
          {questionType === 'multiimage' && (
            <>
              {imageList.length > 0 && isImageVisible && (
                <>
                  <TouchableOpacity onPress={save}>
                    <Text
                      style={{
                        marginRight: 10,
                        color: 'blue',
                        textAlign: 'center',
                        // marginTop: 24,
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
        </>
      </View>
    </View>
  );
};

export default ImageRenderer;
