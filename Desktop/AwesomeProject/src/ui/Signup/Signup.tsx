import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './styles';
import navigationString from '../../constants/navigationString';
import {useSelector} from 'react-redux';
import {saveUserData} from '../../redux/actions/auth';
import {email} from '../../redux/reducers/signUp';
import {showError} from '../../utils/helperFunction';

const Signup = ({navigation}: any) => {
  // const userdetails = useSelector((state: any) => state?.signUp);
  // const state = useSelector((state: any) => state);
  const [items, setItems] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name, email, password} = items;
  const updateState = (data: any) => setItems(prev => ({...prev, ...data}));

  const login = () => {
    if (
      name.trim()?.length == 0 &&
      email.trim()?.length == 0 &&
      password.trim()?.length == 0
    ) {
      showError('please fill All fields');
    } else {
      navigation.navigate(navigationString.LOGIN);
      saveUserData(items);
    }
  };
  // console.log(email, '0034782734723742342748');
  const skip = () => {
    navigation.navigate(navigationString.HOME);
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        value={name}
        onChangeText={value => updateState({...items, name: value})}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={value => updateState({...items, email: value})}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChangeText={value => updateState({...items, password: value})}
        secureTextEntry
      />

      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={{alignItems: 'center'}}>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={skip}>
        <Text style={{alignItems: 'center', marginTop: 24}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signup;
