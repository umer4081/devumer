import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import BlueButton from '../../Components/BlueButton';
import WrapperView from '../../Components/WrapperView';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import {fileUpload, updateProfile} from '../../redux/actions/auth';
import {getUserData, setUserData} from '../../utils/utils';
import ImagePickerCom from './ImagePickerCom';
import styles from './styles';
const SelfieeScreen = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelected = (imagePath: any) => {
    setSelectedImage(imagePath);
  };

  const uploadImage = async (type: any) => {
    try {
      const formData = new FormData();
      const data = {
        uri: selectedImage,
        type: 'image/png',
        name: 'image.png',
      };
      formData.append('signature', data);
      formData.append('file', data);

      const response: any = await fileUpload(formData);
      const profileData = {
        profile_pic: response.image,
      };
      console.log(profileData, '=========profileData');

      const res_update = await updateProfile(profileData);

      const userInfo = await actions.accessTokenLogin();
      setUserData(userInfo).then(res => {
        actions.saveUserData(userInfo);
      });

      console.log(res_update, '=========res_update');

      console.log(userInfo, 'res_updateres_update---');
    } catch (error) {
      console.log(error, 'errerrorerrorerrorerroror00');
    }
  };
  const goHome = async () => {
    const userInfo = await getUserData();
    actions.saveUserData(userInfo);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
          <Image source={imagePath.login_bg} style={styles.bgImage} />
          <WrapperView
            wrapperStyle={styles.content}
            // isLoading={isLoading}
          >
            <View style={styles.header_}>
              <Pressable onPress={goBack}>
                <Image source={imagePath.back_ic} />
              </Pressable>
              <Pressable onPress={goHome}>
                <Text style={styles.SKIP}>Skip</Text>
              </Pressable>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.Take_Selfie}>
                {'Take a selfie to add a profile picture.'}
              </Text>

              <ImagePickerCom onImageSelected={handleImageSelected} />
              <Text style={styles.Click_selfiee}>
                {'Click your selfie picture'}
              </Text>
              <Text style={styles.change_Later}>
                {'You can change this later.'}
              </Text>
            </View>

            <BlueButton
              buttonStyle={styles.buttonStyle}
              buttonTitle={'Next'}
              // onPress={() => Alert.alert('we will go next soon')}
              onPress={uploadImage}
              disabled={!selectedImage}
            />
          </WrapperView>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SelfieeScreen;
