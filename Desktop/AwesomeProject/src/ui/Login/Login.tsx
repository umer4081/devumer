import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {email, password} from '../../redux/reducers/signUp';
import {showError, showSuccess} from '../../utils/helperFunction';

const Login = ({navigation}: any) => {
  const selector = useSelector((state: any) => state?.auth?.userData);
  console.log(selector, 'selectorselectorselectorselectorselector');

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const {email, password} = state;
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));

  const openRegisterScreen = () => {
    navigation.navigate(navigationString.SIGNUP);
  };
  const login = () => {
    if (email.trim() === selector.email && password === selector.password) {
      showSuccess('WELCOME ');
      navigation.navigate(navigationString.HOME);
    } else {
      showError('Please enter valied email and password');
      // navigation.navigate(navigationString.HOME);
    }
  };
  // console.log(selector.email, '00000hdbfssdfhsahuk');
  // console.log(selector.password, 'passwordpasswordpasswordpassword');
  console.log(email, 'emailksjkjjwejoweowowiw');

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={value => updateState({email: value})}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChangeText={value => updateState({password: value})}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{alignItems: 'center'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup_button}
        onPress={openRegisterScreen}>
        <Text style={{alignItems: 'center'}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
