import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
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
import ImagePickerCom from './ImagePickerCom';
import styles from './styles';
import navigationString from '../../constants/navigationString';
const SelfieeScreen = ({navigation}: any) => {
  const goBack = ({navigation}: any) => {
    navigation.goBack();
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelected = (imagePath: any) => {
    setSelectedImage(imagePath);
  };

  const goHome = () => {};

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
              onPress={goHome}
              // onPress={() => Alert.alert('We will Go Next Soon')}
            />
          </WrapperView>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SelfieeScreen;
