import {
    Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import BlueButton from '../../Components/BlueButton';
import TextInputLabeled from '../../Components/TextInputLabeled';
import CountryPhoneNumber from '../../Components/CountryPhoneNumber';
import {moderateScale} from '../../styles/responsiveSize';
import navigationString from '../../constants/navigationString';

const EditProfile = ({navigation}:any) => {
  const [state, setState] = useState({
    phoneNumber: '',
  });
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {phoneNumber} = state;

  const onPressSave=()=>{
    Keyboard.dismiss()
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <View style={styles.dragLine} />
      <View style={styles.content}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.editProfileText}>Edit profile</Text>
            <Text style={styles.descText}>
              {
                'This is the name and number would drivers get when you will book your ride.'
              }
            </Text>
            <TextInputLabeled placeholder="Name" />
            <CountryPhoneNumber
              containerStyle={{marginVertical: moderateScale(16)}}
              isCheck={true}
              value={phoneNumber}
              onChangeText={val => {
                updateState({phoneNumber: val.replace(/[^\d]/g, '')});
              }}
              keyboardType="numeric"
            />
            <TextInputLabeled
              placeholder="Email"
              keyboardType="email-address"
            />
          </ScrollView>
          <BlueButton buttonTitle="Save" onPress={onPressSave}/>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default EditProfile;
