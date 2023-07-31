import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import Buttoncomp from '../../UiComp/Buttoncomp';

const OnBoarding = () => {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.primary}}>
      <Text>OnBoarding</Text>
      <Buttoncomp
        mode={'elevated'}
        loading={true}
        ButtonText="hello"
        disabled={true}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
